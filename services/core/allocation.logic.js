const { mergeIntervals, subtractIntervals } = require('../allocationUtils/allocation.util');

// 가용시간 전처리
const preprocessSchedule = async (room) => {
    const allQuietBlocks = [];
    // 방에 속한 사용자들을 순회하며 모든 QUIET 시간 중 시작, 종료 시간을 배열에 저장
    room.members.forEach(member => {
        // QUIET만 걸러서 저장
        const quiets = member.scheduleBlocks.filter(b => b.type === 'QUIET');
        // QUIET의 배열의 시작, 종료 시간을 추출하여 배열에 저장
        quiets.forEach(q => {
            allQuietBlocks.push({
                startTime: new Date(q.startTime).getTime(),
                endTime: new Date(q.endTime).getTime()
            });
        });
    });

    // QUIET 합집합 계산
    const roomQuietIntervals = mergeIntervals(allQuietBlocks);


    // 개인 FREE 시간 계산 멤버마다 계산 반복하여 만든 배열을 전처리 결과로 반환
    return room.members.map(user => {
        // FREE 블록 가져오기
        const myFreeBlocks = user.scheduleBlocks
            .filter(block => block.type === 'FREE')
            .map(block => ({
                startTime: new Date(block.startTime).getTime(),
                endTime: new Date(block.endTime).getTime(),
                // 날짜 객체 변환
                date: new Date(block.startTime).toISOString().split('T')[0],
                // 업무 고유 id
                originalBlockId: block.id,
            }));

        // FREE 블록과 QUIET 합집합의 차집합 계산
        let availableTime = [];
        for (const freeBlock of myFreeBlocks) {
            const subtracted = subtractIntervals(freeBlock, roomQuietIntervals);
            availableTime = [...availableTime, ...subtracted];
        }

        return {
            // 방 멤버
            userId: user.id,
            // 가용 시간
            availableTime: availableTime,
            // 저번 주 업무 부하
            workload: user.workLoad,
            // 사용자 선호도
            taskPreferences: user.taskPreferences,
            // 현재 업무 부하
            currentWorkLoad: 0,
            // 하루 업무 제한
            dailyCounts: {}
        };
    });
};

// 업무 전처리 빈도수만큼 task 복제
const prepareTaskPool = (roomTasks) => {
    let taskPool = [];
    for (const task of roomTasks) {
        for (let i = 0; i < task.frequency; i++) {
            taskPool.push({
                ...task,
                // task Id에 임시 아이디 추가
                instanceId: `${task.id}_${i}`,
                // 업무가 배정되었는지 확인하기 위한 임시 속성 추가
                isAssigned: false
            });
        }
    }
    return taskPool;
};

// 그리디 업무 분배 시작
const executeGreedyAssignment = (users, taskPool) => {

    // 수정 용이성을 위해 상수 정의
    const CONFIG = {
        // 업무 시간
        TASK_DURATION: 2,
        // 하루 업무 제한
        DEFAULT_DAILY_LIMIT: 1
    };

    // 배정 가능한 시간 탐색 FREE 시간이 업무 시간보다 길고, 카운트 초과 여부에 맞는 인덱스 번호(빈 시간 블럭 배열) 반환
    const findAvailableSlot = (user, ignoreLimit = false) => {

        // 가용 시간 배열 탐색
        return user.availableTime.findIndex(block => {

            // 업무 시간보다 FREE 블록이 더 긴지 확인
            const durationHours = (block.endTime - block.startTime) / (1000 * 60 * 60);
            if (durationHours < CONFIG.TASK_DURATION) return false;

            // 해당 날짜의 업무 카운트 초과 확인
            if (!ignoreLimit) {
                const currentCount = user.dailyCounts[block.date] || 0;
                if (currentCount >= CONFIG.DEFAULT_DAILY_LIMIT) return false;
            }

            // findIndex에서 조건에 맞는 시간 인덱스 번호 반환
            return true;
        });
    };

    // 배정 후 상태, 할당 업무 업데이트
    const assignTask = (user, task, blockIndex) => {
        // Task 업데이트
        // 임시로 정의한 배정 여부 속성을 false에서 true로 전환
        task.isAssigned = true;
        // 할당된 사용자 id를 값으로 새 속성 추가
        task.assignedUserId = user.userId;
        // db 저장을 위한 시작, 종료 시간 저장
        task.startTime = user.availableTime[blockIndex].startTime
        task.endTime = user.availableTime[blockIndex].startTime + (CONFIG.TASK_DURATION * (1000 * 60 * 60));

        // 업무가 할당된 시간만큼 가용 시간의 시작 시간을 미룸
        user.availableTime[blockIndex].startTime += CONFIG.TASK_DURATION * (1000 * 60 * 60);

        // 현재 업무 부하량을 업무 난이도만큼 증가
        user.currentWorkLoad += (task.difficulty || 0);

        // 일일 업무 카운트 증가
        // 해당 날짜 키가 없다면 추가
        if (!user.dailyCounts[user.availableTime[blockIndex].date]) {
            user.dailyCounts[user.availableTime[blockIndex].date] = 0;
        }
        user.dailyCounts[user.availableTime[blockIndex].date] += 1;
    };

    // 1. 저번 주 업무 부하 순으로 정렬 및 지망 배정
    const usersSortedByPastLoad = [...users].sort((a, b) => b.workload - a.workload);

    usersSortedByPastLoad.forEach(user => {

        // 사용자의 업무 지망 순서대로 배정
        const preferences = (user.taskPreferences || [])
            .sort((a, b) => a.priority - b.priority);

        for (const pref of preferences) {
            // 선호하는 업무의 인스턴스가 남아있는지 확인
            const targetTask = taskPool.find(t => t.id === pref.taskId && !t.isAssigned);

            // 남았을 경우 빈자리 확인
            if (targetTask) {
                // 빈 자리 탐색 boolean
                const blockIndex = findAvailableSlot(user, false);

                if (blockIndex !== -1) {
                    // 업무 저장
                    assignTask(user, targetTask, blockIndex);
                }
            }
        }
    });

    const assignRemainingTasks = (ignoreLimit) => {
        // 남은 업무 저장
        const unassignedTasks = taskPool
            // task가 할당되지 않은 업무 필터링
            .filter(task => !task.isAssigned)
            // 난이도 내림차순 정렬
            .sort((a, b) => b.difficulty - a.difficulty);

        for (const task of unassignedTasks) {
            // 배정 가능한 후보군 탐색 배정 가능한 인덱스 번호를 필터링하여 저장
            const candidates = users
                .map(u => ({ user: u, blockIndex: findAvailableSlot(u, ignoreLimit) }))
                .filter(c => c.blockIndex !== -1);

            if (candidates.length > 0) {
                // currentWorkLoad를 오름차순으로 정렬
                candidates.sort((a, b) => a.user.currentWorkLoad - b.user.currentWorkLoad);

                // 가장 currentWorkLoad가 낮은 사람에게 가장 어려운 업무 할당
                const best = candidates[0];
                assignTask(best.user, task, best.blockIndex);
            }
        }
    };

    // 2. 남은 업무를 현재 업무 부하가 낮은 사람에게 어려운 순으로 할당
    assignRemainingTasks(false);

    // 3. 지망 분배, 현재 업무 부하 오름차순 분배가 끝났음에도 업무가 남았을 경우 일일 업무 제한을 해제하여 분배
    assignRemainingTasks(true);

    // 업무 분배가 다 끝났음에도 남은 업무들은 물리적 시간이 부족하여 분배x
    return { users, taskPool };
};

module.exports = {
    preprocessSchedule,
    prepareTaskPool,
    executeGreedyAssignment,
}
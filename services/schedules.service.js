const prisma = require('../prismaClient');

// 스케줄 등록, 수정
const registSchedule = async (table, userId) => {
    // 날짜 문자열을 date 객체로 변경
    const timeBlock = table.map((block) => ({
        // 사용자 id
        userId: userId,
        // block 종류
        type: block.type,
        // 시작 시간
        startTime: new Date(block.startTime),
        // 종료 시간
        endTime: new Date(block.endTime),
    }));

    const checkNewUser = await prisma.scheduleBlock.findFirst({
        // ACTIVE 필드 여부로 신규 유저 판별
        where: { userId: userId, status: 'ACTIVE' },
    });

    const newSchedule = await prisma.$transaction(async (tx) => {
        if (checkNewUser) {
            // 기존 유저의 경우 TEMPORARY만 삭제
            await tx.scheduleBlock.deleteMany({
                where: { userId: userId, status: 'TEMPORARY' },
            });

            // TEMPORARY 재작성
            const temporaryData = timeBlock.map(block => ({ ...block, status: 'TEMPORARY' }));
            await tx.scheduleBlock.createMany({ data: temporaryData });

            // 업데이트된 스케줄 블럭 반환
            return tx.scheduleBlock.findMany({
                where: { userId: userId, status: 'TEMPORARY' },
                // 시간 순 정렬
                orderBy: { startTime: 'asc' }
            });

        }

        // 신규 유저
        else {
            // active 저장
            const activeData = timeBlock.map(block => ({ ...block, status: 'ACTIVE' }));
            // temporary 저장
            const temporaryData = timeBlock.map(b => {
                const nextStart = new Date(b.startTime);
                const nextEnd = new Date(b.endTime);

                // ACTIVE 스케줄에 +7일
                nextStart.setDate(nextStart.getDate() + 7);
                nextEnd.setDate(nextEnd.getDate() + 7);

                return {
                    ...b,
                    // 시작, 종료 날짜 변경
                    startTime: nextStart,
                    endTime: nextEnd,
                    status: 'TEMPORARY'
                };
            });

            // 신규 유저이므로 삭제 없이 바로 생성
            await tx.scheduleBlock.createMany({
                data: [...activeData, ...temporaryData]
            });

            // 생성된 스케줄(ACTIVE) 반환
            return null;
        }
    });

    return newSchedule;
};

// status에 따른 스케줄 조회
const getSchedule = async (userId, status) => {
    return prisma.scheduleBlock.findMany({
        where: {
            userId: userId,
            status: status,
        },
        include: {
            // 업무 정보
            roomTask: {
                select: { title: true }
            }
        },
        orderBy: { startTime: 'asc' },
    });
};

// 스케줄 history 아카이빙, TEMPORARY 상태를 ACTIVE로 승격, ACTIVE +7일 하여 TEMPORARY로 복사
const archiveAndCopySchedule = async () => {
    try {
        // 아카이빙, 승격, 복사를 트랜잭션으로 실행
        await prisma.$transaction(async (tx) => {

            // 아카이빙 시작
            // 모든 사용자의 현재 ACTIVE 상태의 스케줄을 ScheduleHistory로 복사
            const pastSchedule = await tx.scheduleBlock.findMany({
                where: { status: 'ACTIVE' },
            });

            if (pastSchedule.length > 0) {
                // 아카이빙 할 데이터 추출 전체 데이터에서 ScheduleBlock에서 id, status는 제외
                const historyData = pastSchedule.map(block => ({
                    startTime: block.startTime,
                    endTime: block.endTime,
                    type: block.type,
                    roomTaskId: block.roomTaskId,
                    difficulty: block.difficulty,
                    userId: block.userId,
                }));
                await tx.scheduleHistory.createMany({ data: historyData });

                // 원본 ACTIVE 스케줄 전체 삭제
                await tx.scheduleBlock.deleteMany({
                    where: { status: 'ACTIVE' },
                });
            }

            // 승격 시작
            // 모든 TEMPORARY 스케줄을 ACTIVE로 변경
            await tx.scheduleBlock.updateMany({
                where: { status: 'TEMPORARY' },
                data: { status: 'ACTIVE' },
            });

            // 복사 시작
            // ACTIVE 스케줄에 +7일 하여 TEMPORARY 상태로 복사
            const currentActiveSchedule = await tx.scheduleBlock.findMany({
                where: { status: 'ACTIVE' },
            });

            if (currentActiveSchedule.length > 0) {
                // 날짜를 +7일 하여 TEMPORARY 데이터 생성
                const nextWeekSchedule = currentActiveSchedule.map(block => {
                    const startTime = new Date(block.startTime);
                    startTime.setDate(startTime.getDate() + 7);

                    const endTime = new Date(block.endTime);
                    endTime.setDate(endTime.getDate() + 7);

                    return {
                        userId: block.userId,
                        startTime: startTime,
                        endTime: endTime,
                        // TASK 상태였다면 다시 FREE로 초기화
                        type: block.type === 'TASK' ? 'FREE' : block.type,
                        status: 'TEMPORARY',
                        roomTaskId: null,
                        difficulty: null,
                    };
                });

                // TEMPORARY 저장
                await tx.scheduleBlock.createMany({
                    data: nextWeekSchedule,
                });
            }
        });

    } catch (error) {
        throw error;
    }
};

// 사용자의 일일 스케줄 반환
const getDailySchedule = async (userId, date) => {
    // 쿼리 파라미터에서 Date 객체로 저장
    const targetDate = new Date(date);

    // 시작 시간
    const startTime = new Date(targetDate);
    startTime.setHours(startTime.getHours());

    // 종료 시간
    const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000 - 1);

    const [block, history] = await Promise.all([
        // ACTIVE, TEMPORARY조회
        prisma.scheduleBlock.findMany({
            where: {
                userId: userId,
                // status를 조회하지 않는 것으로 ACTIVE, TEMPORARY 동시 조회
                // status: '',
                // 날짜 조회
                startTime: {
                    // 시작 시간 <= 스케줄 <= 종료 시간
                    gte: startTime,
                    lte: endTime,
                },
            },
            include: {
                roomTask: {
                    select: { title: true }
                }
            },
            // 시간 순 정렬
            orderBy: { startTime: 'asc' },
        }),

        // ScheduleHistory 조회
        prisma.scheduleHistory.findMany({
            where: {
                userId: userId,
                startTime: {
                    gte: startTime,
                    lte: endTime,
                },
            },
            include: {
                roomTask: { select: { title: true } }
            },
            orderBy: { startTime: 'asc' },
        }),
    ]);

    return [...block, ...history];
};

// 멤버들의 TASK, QUIET 블록 요청
const getMemberDailySchedule = async (userId, date) => {
    // 쿼리 파라미터에서 Date 객체로 저장
    const targetDate = new Date(date);

    // 시작 시간
    const startTime = new Date(targetDate);
    startTime.setHours(startTime.getHours());

    // 종료 시간
    const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000 - 1);

    console.log(startTime);
    console.log(endTime);

    // 사용자가 속해있는 방 조회
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { roomId: true }
    });

    const myRoomId = user.roomId;

    const [block, history] = await Promise.all([
        // ACTIVE, TEMPORARY조회
        prisma.scheduleBlock.findMany({
            where: {
                // 사용자의 방 멤버 필터링
                user: { roomId: myRoomId },
                // status를 조회하지 않는 것으로 ACTIVE, TEMPORARY 동시 조회
                // status: '',
                // 날짜 조회
                startTime: {
                    // 시작 시간 <= 스케줄 <= 종료 시간
                    gte: startTime,
                    lte: endTime,
                },
                // QUIET 시간과 업무시간만 가져오기
                type: {
                    in: ['QUIET', 'TASK']
                }
            },
            include: {
                roomTask: {
                    select: { title: true }
                },
                user: {
                    select: {
                        // 모두의 타임 테이블에서 이름 출력 가능
                        name: true,
                    }
                }
            },
            // 시간 순 정렬
            orderBy: { startTime: 'asc' },
        }),

        // ScheduleHistory 조회
        prisma.scheduleHistory.findMany({
            where: {
                // 사용자의 방 멤버 필터링
                user: { roomId: myRoomId },
                startTime: {
                    gte: startTime,
                    lte: endTime,
                },
            },
            include: {
                roomTask: { select: { title: true } }
            },
            orderBy: { startTime: 'asc' },
        }),
    ]);

    return [...block, ...history];
};

// 멤버들에게 할당된 업무 조회
const getMemberWeeklyTaskSchedule = async (userId) => {

    // 사용자가 속해있는 방 조회
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { roomId: true }
    });

    const myRoomId = user.roomId;

    return prisma.scheduleBlock.findMany({
        where: {
            // 사용자의 방 멤버 필터링
            user: { roomId: myRoomId },
            status: 'ACTIVE',
            type: 'TASK'
        },
        include: {
            // 업무, 할당 유저의 이름 출력
            roomTask: { select: { title: true } },
            user: { select: { name: true } }
        },
        orderBy: { startTime: 'asc' },
    })
};

module.exports = {
    // 스케줄 등록 / 수정
    registSchedule,
    // status에 맞는 스케줄 요청
    getSchedule,
    // 스케줄 아카이빙, 승격, 복사
    archiveAndCopySchedule,
    // 일일 스케줄 반환
    getDailySchedule,
    // 방 멤버들의 QUIET, FREE 블록 반환
    getMemberDailySchedule,
    // 방 멤버들에게 할당된 블록 반환
    getMemberWeeklyTaskSchedule,
};
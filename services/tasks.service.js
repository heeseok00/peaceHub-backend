const prisma = require('../prismaClient');

// 선호도 조사에 띄울 업무 목록 조회
const getRoomTasks = async (userId) => {
    // roomId 확인
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { roomId: true }
    });

    // 방 업무 반환
    return prisma.roomTask.findMany({
        where: { roomId: user.roomId },
        // 업무 이름
        select: {
            title: true,
        }
    });
};

// 선호 업무 저장
const setTaskPreferences = async (userId, preferences) => {
    // roomId 확인
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { roomId: true }
    });

    // 데이터 무결성 검사 업무 id가 방에 속한지 확인
    const taskIds = preferences.map(preference => preference.taskId);
    const validTasks = await prisma.roomTask.count({
        where: {
            // 업무 id
            id: { in: taskIds },
            // 내 방 id
            roomId: user.roomId 
        }
    });
    
    // 내 방 업무가 아닐 경우 error throw
    if (validTasks !== preferences.length) {
        throw new Error('INVALID_TASK_ID');
    }

    // 기존 선호도 삭제, 새 선호도 저장을 트랜잭션으로 진행 
    await prisma.$transaction(async (tx) => {
        // 선호도 삭제
        await tx.taskPreference.deleteMany({
            where: { userId: userId }
        });

        // 새 선호도 저장
        if (preferences.length > 0) {
            const data = preferences.map(p => ({
                userId: userId,
                taskId: p.taskId,
                priority: p.priority
            }));

            await tx.taskPreference.createMany({ data });
        }
    });

    // 결과 반환, 선호도 지정 표에 해당 내용을 우선 표시
    return prisma.taskPreference.findMany({
        where: { userId: userId },
        include: { task: { select: { title: true } } },
        orderBy: { priority: 'asc' }
    });
};

module.exports = {
    getRoomTasks,
    setTaskPreferences
};
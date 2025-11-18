const prisma = require('../prismaClient');

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
            const temporaryData = timeBlock.map(b => ({ ...b, status: 'TEMPORARY' }));
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
            // active 표시
            const activeData = timeBlock.map(b => ({ ...b, status: 'ACTIVE' }));
            // temporary 표시
            const temporaryData = timeBlock.map(b => ({ ...b, status: 'TEMPORARY' }));

            // 삭제 없이 바로 생성
            await tx.scheduleBlock.createMany({
                data: [...activeData, ...temporaryData]
            });

            // 생성된 스케줄(ACTIVE) 반환
            return tx.scheduleBlock.findMany({
                where: { userId: userId, status: 'ACTIVE' },
                // 시간 순 정렬
                orderBy: { startTime: 'asc' }
            });
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
            // (선택) 나중에 배정된 업무(Task) 정보도 같이 보고 싶다면 포함
            roomTask: {
                select: { title: true }
            }
        },
        orderBy: { startTime: 'asc' },
    });
};

module.exports = {
    registSchedule,
    getSchedule,
};
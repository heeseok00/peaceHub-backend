const prisma = require('../prismaClient');

// post time table
const registSchedule = async (table, userId) => {
    // 스케줄 최초 등록인지, 수정인지 확인
    const checkScheduleStatus = await prisma.scheduleBlock.findFirst({
        where: {
            userId: userId,
            status: 'ACTIVE',
        },
    });

    // 트랜젝션으로 스케줄 저장
    const newSchedule = await prisma.$transaction(async (tx) => {
        // ACTIVE 스케줄이 있을 경우
        if (checkScheduleStatus) {
            const dataToCreate = table.map((block) => ({
                // 사용자 id
                userId: userId,
                // 요일
                dayOfWeek: block.dayOfWeek,
                // block 종류
                type: block.type,
                // 시작 시간
                startTime: block.startTime,
                // 종료 시간
                endTime: block.endTime,
                // schedule status를 TEMPORARY 설정
                status: 'TEMPORARY',
            }));


            // 임시 상태 스케줄 삭제 후 덮어쓰기
            await tx.scheduleBlock.deleteMany({
                where: { userId: userId, status: 'TEMPORARY' },
            });
            await tx.scheduleBlock.createMany({
                data: dataToCreate,
            });

            // 임시 상태 스케줄 반환
            return tx.scheduleBlock.findMany({
                where: { userId: userId, status: 'TEMPORARY' },
                // 요일, 시간 순 정렬
                orderBy: [
                    { dayOfWeek: 'asc' },
                    { startTime: 'asc' }
                ]
            });
        }

        // 최초 스케줄 등록 시
        else {
            // ACTIVE 저장용
            const dataToCreateActive = table.map((block) => ({
                // 사용자 id
                userId: userId,
                // 요일
                dayOfWeek: block.dayOfWeek,
                // block 종류
                type: block.type,
                // 시작 시간
                startTime: block.startTime,
                // 종료 시간
                endTime: block.endTime,
                // schedule status를 ACTIVE로 설정
                status: 'ACTIVE',
            }));
            // TEMPORARY 저장용
            const dataToCreateTemporary = table.map((block) => ({
                // 사용자 id
                userId: userId,
                // 요일
                dayOfWeek: block.dayOfWeek,
                // block 종류
                type: block.type,
                // 시작 시간
                startTime: block.startTime,
                // 종료 시간
                endTime: block.endTime,
                // schedule status를 TEMPORARY로 설정
                status: 'TEMPORARY',
            }));

            // 최초 등록 시 스케줄 DB가 비어있으므로 deleteMany 없이 바로 createMany 실행
            await tx.scheduleBlock.createMany({
                data: [...dataToCreateActive, ...dataToCreateTemporary],
            });

            // ACTIVE 스케줄을 반환
            return tx.scheduleBlock.findMany({
                where: { userId: userId, status: 'ACTIVE' },
                // 요일, 시간 순 정렬
                orderBy: [
                    { dayOfWeek: 'asc' },
                    { startTime: 'asc' }
                ]
            });
        }
    });

    return newSchedule;
};

// get time table
const getSchedule = async (userId, status) => {
    return prisma.scheduleBlock.findMany({
        // 스케줄 수정 페이지에서 표시를 위해 임시 상태 스케줄 반환
        where: { userId: userId, status: status },
        // 요일, 시간 순 정렬
        orderBy: [
            { dayOfWeek: 'asc' },
            { startTime: 'asc' }
        ]
    });
};


module.exports = {
    registSchedule,
    getSchedule,
};
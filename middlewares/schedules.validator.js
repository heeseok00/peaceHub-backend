const validateBlock = (req, res, next) => {
    // 시간표 내용이 담긴 body 추출 
    const table = req.body;

    // time block의 배열의 형태인지 확인. 배열이 아닐 경우 400 bad request 반환
    if (!Array.isArray(table)) {
        return res.status(400).json({ message: 'body is not array' });
    }

    // 요일, time block type이 유효한지 확인
    const validTypes = ['QUIET', 'BUSY', 'FREE'];

    // table의 모든 block을 순회하며 확인
    for (const block of table) {
        const start = new Date(block.startTime).getTime();
        const end = new Date(block.endTime).getTime();

        if (
            !validTypes.includes(block.type) ||
            // 시작 시간이 유효한지
            isNaN(start) ||
            // 종료 시간이 유효한지
            isNaN(end) ||
            start >= end
        ) {
            // 하나라도 조건 충족이 되지 않는다면 400 bad request, 해당 block 반환
            return res.status(400).json({
                message: 'include invalid block',
                invalidBlock: block
            });
        }
    }

    // 모든 time block의 내용이 유효하다면 겹치는 시간과 빈틈이 없는지 검사

    // 날짜별로 time block 정리를 위한 객체 생성
    const blocksByDate = {};

    for (const block of table) {
        // startTime에서 날짜 부분(YYYY-MM-DD)만 파싱하여 key로 사용
        const targetDate = new Date(block.startTime);
        const kstDate = new Date(targetDate.getTime() + 9 * 60 * 60 * 1000);
        const dateKey = kstDate.toISOString().split('T')[0];

        // 해당 key가 존재하지 않으면 배열 생성
        if (!blocksByDate[dateKey]) {
            blocksByDate[dateKey] = [];
        }
        // 해당 key의 value로 time block 객체 삽입
        blocksByDate[dateKey].push(block);
    }

    // 날짜별로 순회하며 정렬 및 무결성 검사
    for (const dateKey in blocksByDate) {

        // 특정 날짜의 모든 block 리스트를 저장
        const dailyBlocks = blocksByDate[dateKey];

        // 시작 시간을 기준으로 오름차순 정렬 O(NlogN)
        dailyBlocks.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

        // 날짜별로 00:00:00으로 시작하는지 검사
        const dayStart = new Date(dailyBlocks[0].startTime).getTime();
        const expectedStart = new Date(`${dateKey}T00:00:00.000Z`).getTime();

        if (dayStart !== expectedStart) {
            return res.status(400).json({ message: `${dateKey} 00시 00분 공백` });
        }

        // 24:00:00으로 끝나는지 검사
        const dayEnd = new Date(dailyBlocks[dailyBlocks.length - 1].endTime).getTime();
        // const expectedEnd = new Date(expectedStart);
        // //expectedStart의 날짜에 + 1
        // expectedEnd.setDate(expectedEnd.getDate() + 1);
        // expectedEnd.setMilliseconds(expectedEnd.getDate() - 1);

        const expectedEnd = new Date(`${dateKey}T24:00:00.000Z`).getTime();
        console.log(expectedEnd);

        if (dayEnd !== expectedEnd - 1) {
            return res.status(400).json({ message: `${dateKey} 24시 00분 공백` });
        }

        // 빈 틈 검사
        for (let i = 1; i < dailyBlocks.length; i++) {
            const lateEnd = new Date(dailyBlocks[i - 1].endTime).getTime();
            const afterStart = new Date(dailyBlocks[i].startTime).getTime();

            // 이전 블록 종료 시간이 뒷 블록 시작 시간보다 늦을 경우
            if (lateEnd > afterStart) {
                //409 Conflict와 함께 충돌난 블록 반환
                return res.status(409).json({
                    message: 'time conflict',
                    preBlock: dailyBlocks[i - 1],
                    lateBlock: dailyBlocks[i]
                });
            }

            // 이전 블록과 종료 시간과 뒷 블록 시작 시간이 같지 않을 경우
            if (lateEnd !== afterStart) {
                // 400 bad request와 함께 공백난 시간 반환
                return res.status(400).json({
                    message: `${dateKey} 중간 공백 발생`,
                    gapStart: dailyBlocks[i - 1].endTime,
                    gapEnd: dailyBlocks[i].startTime
                });
            }
        }
    }

    // 스케쥴 유효성, 무결성 검사 통과 시 controller로 넘어감
    next();
};

module.exports = {
    validateBlock,
}
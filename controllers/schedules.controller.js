const scheduleService = require('../services/schedules.service'); // require schedule service

// time table 등록
const registSchedule = async (req, res, next) => {

    try {
        // 유효성, 무결성 검사가 끝난 time table
        const table = req.body;
        // 사용자 id 추출
        const userId = req.user.id;

        // service 호출
        // await 후 서비스에서 생성한 time table 객체 배열 반환
        const newSchedule = await scheduleService.registSchedule(table, userId);

        if (newSchedule) {
            // 기존 유저 201 create와 함께 수정된 스케줄 데이터 반환
            res.status(201).json(newSchedule);
        } else {
            // 신규 유저 배열 없이 201 create만 반환
            res.status(201).send(); 
        }
    } catch (error) {
        next(error);
    }

}

// 사용자 active 상태 time table 요청
const getActiveSchedule = async (req, res, next) => {
    try {
        // userId 추출
        const userId = req.user.id;
        // service 호출
        const schedule = await scheduleService.getSchedule(userId, 'ACTIVE');

        // 200 Ok와 함깨 time table 객체 배열 반환
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

// 사용자 temporary 상태 time table 요청
const getTemporarySchedule = async (req, res, next) => {
    try {
        // userId 추출
        const userId = req.user.id;
        // service 호출
        const schedule = await scheduleService.getSchedule(userId, 'TEMPORARY');

        // 200 Ok와 함깨 time table 객체 배열 반환
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

const getDailySchedule = async(req,res,next)=>{
    try{
        // userId 추출
        const userId = req.user.id;
        const {date} = req.query;

        // 날짜 파라미터 유효성 검사
        if ((!date) || isNaN(new Date(date).getTime())) {
            return res.status(400).json({ 
                message: 'need validate date query parameter' 
            });
        }

        const dailySchedule = await scheduleService.getDailySchedule(userId, date);

        // 200 Ok와 함께 time table 객체 배열 반환
        res.status(200).json(dailySchedule);
    } catch(error){
        next(error);
    }
}

module.exports = {
    // time table 등록 함수
    registSchedule,
    // active time table 조회 함수
    getActiveSchedule,
    // temporary time table 조회 함수
    getTemporarySchedule,
};
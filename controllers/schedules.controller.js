const scheduleService = require('../services/schedules.service'); // require schedule service

// 스케줄 등록
const registSchedule = async (req, res, next) => {

    try {
        // 유효성, 무결성 검사가 끝난 스케줄
        const table = req.body;
        // 사용자 id 추출
        const userId = req.user.id;

        const userRoomId = req.user.roomId;

        // service 호출
        // await 후 서비스에서 생성한 스케줄 객체 배열 반환
        const newSchedule = await scheduleService.registSchedule(table, userId, userRoomId);

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

// 사용자 active 상태 스케줄 요청
const getActiveSchedule = async (req, res, next) => {
    try {
        // userId 추출
        const userId = req.user.id;
        const userRoomId = req.user.roomId;
        // service 호출
        const schedule = await scheduleService.getSchedule(userId, userRoomId, 'ACTIVE');

        // 200 Ok와 함깨 스케줄 객체 배열 반환
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

// 사용자 temporary 상태 스케줄 요청
const getTemporarySchedule = async (req, res, next) => {
    try {
        // userId 추출
        const userId = req.user.id;
        const userRoomId = req.user.roomId;
        // service 호출
        const schedule = await scheduleService.getSchedule(userId, userRoomId, 'TEMPORARY');

        // 200 Ok와 함깨 스케줄 객체 배열 반환
        res.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

// 날짜별 사용자 스케줄 조회
const getDailySchedule = async(req,res,next)=>{
    try{
        // userId 추출
        const userId = req.user.id;
        const userRoomId = req.user.roomId;
        const {date} = req.query;

        // 날짜 파라미터 유효성 검사
        if ((!date) || isNaN(new Date(date).getTime())) {
            return res.status(400).json({ 
                message: 'need validate date query parameter' 
            });
        }

        const dailySchedule = await scheduleService.getDailySchedule(userId, userRoomId, date);

        // 200 Ok와 함께 스케줄 객체 배열 반환
        res.status(200).json(dailySchedule);
    } catch(error){
        next(error);
    }
}

// 날짜별 사용자 스케줄 조회
const getMemberDailySchedule = async(req,res,next)=>{
    try{
        // userId 추출
        const userId = req.user.id;
        const userRoomId = req.user.roomId;
        const {date} = req.query;

        // 날짜 파라미터 유효성 검사
        if ((!date) || isNaN(new Date(date).getTime())) {
            return res.status(400).json({ 
                message: 'need validate date query parameter' 
            });
        }

        const dailySchedule = await scheduleService.getMemberDailySchedule(userId, userRoomId, date);

        // 200 Ok와 함께 스케줄 객체 배열 반환
        res.status(200).json(dailySchedule);
    } catch(error){
        next(error);
    }
}

const getMemberWeeklyTaskSchedule = async(req,res,next)=>{
    try{
        // userId 추출
        const userId = req.user.id;
        const userRoomId = req.user.roomId;
        const weeklyTask = await scheduleService.getMemberWeeklyTaskSchedule(userId, userRoomId);

        // 200 Ok와 함께 스케줄 객체 배열 반환
        res.status(200).json(weeklyTask);
    } catch(error){
        next(error);
    }
}

module.exports = {
    // 스케줄 등록 컨트롤러
    registSchedule,
    // active 스케줄 조회 컨트롤러
    getActiveSchedule,
    // temporary 스케줄 조회 컨트롤러
    getTemporarySchedule,
    // 일별 스케줄 조회 컨트롤러
    getDailySchedule,
    // 일별 멤버 스케줄 조회 컨트롤러
    getMemberDailySchedule,
    // 할당 업무 조회 컨트롤러
    getMemberWeeklyTaskSchedule,
};
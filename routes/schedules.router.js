const express = require('express');
const router = express.Router();

const {validateBlock:checkScheduleValidate} = require('../middlewares/schedules.validator'); // require time block validator middleware
const {requireRoom:checkRoom} = require('../middlewares/checkRoom.middleware'); // require check room middleware

const scheduleController = require('../controllers/schedules.controller'); // require schedule controller

// 타임 테이블 등록
/**
 * Method: POST
 * path: /api/schedules/
 * 
 * 타임 테이블 유효성, 무결성 검사를 위한 middleware 호출
 */
router.post('/', checkRoom, checkScheduleValidate, scheduleController.registSchedule);

// 이번 주 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/activeSchedules/
 */
router.get('/activeSchedules', checkRoom, scheduleController.getActiveSchedule);

// 다음 주 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/temporarySchedules/
 */
router.get('/temporarySchedules', checkRoom, scheduleController.getTemporarySchedule);

// 일별 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/daily?date=YYYY-MM-DD
 */
router.get('/daily', checkRoom, scheduleController.getDailySchedule);

// 일별 멤버들 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/memberDaily?date=YYYY-MM-DD
 */
router.get('/memberDaily', checkRoom, scheduleController.getMemberDailySchedule);

// router exports
module.exports = router;
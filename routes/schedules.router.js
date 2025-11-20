const express = require('express');
const router = express.Router();

const {validateBlock:checkValidate} = require('../middlewares/schedules.validator'); // require time block validator middleware

const scheduleController = require('../controllers/schedules.controller'); // require schedule controller

// 타임 테이블 등록
/**
 * Method: POST
 * path: /api/schedules/
 * 
 * 타임 테이블 유효성, 무결성 검사를 위한 middleware 호출
 */
router.post('/', checkValidate, scheduleController.registSchedule);

// 이번 주 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/ActiveSchedules/
 */
router.get('/ActiveSchedules', scheduleController.getActiveSchedule);

// 다음 주 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/Temporaryschedules/
 */
router.get('/TemporarySchedules', scheduleController.getTemporarySchedule);

// 일별 타임 테이블 조회
/**
 * Method: GET
 * path: /api/schedules/daily?date=YYYY-MM-DD
 */
router.get('/daily', scheduleController.getDailySchedule);

// router exports
module.exports = router;
const express = require('express');
const router = express.Router();

const {requireRoom:checkRoom} = require('../middlewares/checkRoom.middleware'); // require check room middleware
const {validatePreferences:checkPreferenceValidate} = require('../middlewares/preferences.validator'); // require check preference middleware

const tasksController = require('../controllers/tasks.controller');

// 업무 목록 조회
/**
 * Method: GET
 * path: /api/tasks/
 * 
 * 업무 목록 표시를 위한 get api 호출
 */
router.get('/', checkRoom, tasksController.getTasks);

// 업무 목록 조회
/**
 * Method: POST
 * path: /api/tasks/preferences
 * 
 * 선호 업무 저장
 */
router.post('/preferences', checkRoom, checkPreferenceValidate, tasksController.postPreferences);

module.exports = router;
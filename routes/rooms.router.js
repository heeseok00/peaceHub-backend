const express = require('express');
const router = express.Router();
const {requireRoom:checkRoom} = require('../middlewares/checkRoom.middleware'); // require check room middleware
const roomController = require('../controllers/rooms.controller'); // require room controller

// 방 생성
/**
 * Method: POST
 * path: /api/rooms/
 */
router.post('/', roomController.createRoom);

// 방 참여
/**
 * Method: POST
 * path: /api/rooms/join
 */
router.post('/join', roomController.joinRoom);

// 방 탈퇴
/**
 * Method: DELETE
 * path: /api/rooms/quit
 */
router.delete('/quit', checkRoom, roomController.quitRoom);



// router exports
module.exports = router;
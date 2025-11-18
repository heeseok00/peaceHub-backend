const express = require('express'); // require express framework
const router = express.Router(); // generate router object

const userController = require('../controllers/users.controller') // require user controller
/** 세션으로 사용자 확인
 * GET /api/users
 * 프론트엔드에서 새로고침, 새 탭 접속할 때마다 유저 객체 소실 그 때마다 해당 api 요청 필요
 * 프론트는 세션에 접근 불가. 세션에 있는 id를 서버에 보내 유저 객체를 반환
*/
router.get('/me', userController.getUser);

/** 프로필 작성
 * PUT /api/users/profile
 * 프로필 설정에서 프로필 이름 변경 시 db 변경
*/
router.put('/profile', userController.updateProfile);

module.exports = router;
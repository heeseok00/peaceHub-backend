const express = require('express');
const passport = require('passport');
const router = express.Router();

// 1. 구글 로그인 시작 라우터
// 이 주소로 GET 요청이 오면, passport가 알아서 구글 로그인 페이지로 리디렉션함
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 2. 구글 로그인 성공 후 돌아올 Callback 라우터
// 구글에서 이 주소로 리디렉션하면, passport가 코드를 받아 토큰 교환 후
// 3단계의 async 콜백 함수를 실행함
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }), // 실패 시 홈으로
  (req, res) => {
    // 성공 시, 원하는 경로로 리디렉션 (예: 메인 페이지, 대시보드 등)
    res.redirect('/dashboard');
  }
);

module.exports = router;
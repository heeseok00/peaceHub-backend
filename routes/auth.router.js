const express = require('express');
const passport = require('passport');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// google sign up
// GET /api/auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// success to sign up & call back
// GET /api/auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false, 
  }),
  authController.googleCallback
);

module.exports = router;
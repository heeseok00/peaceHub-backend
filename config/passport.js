const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authService = require('../services/auth.service'); 
const prisma = require('../prismaClient');

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await authService.findOrCreateUser(profile);
          done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
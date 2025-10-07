const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const prisma = require('../prismaClient');

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/users/google/callback', // router address
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // user, DB crosscheck
          const exUser = await prisma.user.findUnique({
            where: { googleId: profile.id },
          });

          if (exUser) {
            // signIn user
            done(null, exUser);
          } else {
            // new user -> db create
            const newUser = await prisma.user.create({
              data: {
                email: profile.emails[0].value,
                name: profile.displayName,
                googleId: profile.id, // google inherence ID
              },
            });
            done(null, newUser);
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
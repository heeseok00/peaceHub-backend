const prisma = require('../prismaClient');

const findOrCreateUser = async (profile) => {
  const exUser = await prisma.user.findUnique({
    where: { googleId: profile.id },
  });

  if (exUser) {
    return exUser; 
  }

  const newUser = await prisma.user.create({
    data: {
      email: profile.emails[0].value,
      name: profile.displayName,
      googleId: profile.id,
    },
  });
  return newUser;
};

module.exports = { findOrCreateUser };
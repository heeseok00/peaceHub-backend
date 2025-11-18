const prisma = require('../prismaClient');

// 사용자 프로필 업데이트
const updateProfile = async (userId, newName) => {
    const updatedUser = await prisma.user.update({
        where:{
            id:userId,
        },
        data:{
            name:newName,
        },
    });

    return updatedUser;
};

module.exports = {
    updateProfile,
};
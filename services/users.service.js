const prisma = require('../prismaClient');

// 사용자 정보 조회
const getUser = (userId) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            room: {
                select: {
                    // 초대 코드
                    inviteCode: true,
                    // 방 이름
                    name: true,
                }
            }
        }
    });
};

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
    getUser,
    updateProfile,
};
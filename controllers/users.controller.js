const userService = require('../services/users.service'); // require user service

const getUser = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await userService.getUser(userId);

        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
}

const updateProfile = async (req, res, next) => {
    try {
        const { name } = req.body;
        const userId = req.user.id;

        // 유효성 검사 문자열인지, 공백이 아닌지 확인
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'need name with string' });
        }

        const updatedProfile = await userService.updateProfile(userId, name);

        // 업데이트된 사용자 객체를 200 Ok와 함께 반환
        res.status(200).json(updatedProfile);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getUser,
    updateProfile,
};

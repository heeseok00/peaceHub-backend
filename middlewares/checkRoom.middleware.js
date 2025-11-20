// 방에 참여하고 있는지 확인
const requireRoom = (req, res, next) => {
  if (!req.user.roomId) {
    // 방에 참여하고 있지 않은 경우 403 forbidden 반환
    return res.status(403).json({ 
      message: 'not participate in room',
    });
  }
  next();
};

module.exports = { 
    requireRoom, 
};
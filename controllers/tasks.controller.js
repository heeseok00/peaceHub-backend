const tasksService = require('../services/tasks.service');

// 업무 목록 조회
const getTasks = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const tasks = await tasksService.getRoomTasks(userId);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// 선호 업무 저장
const postPreferences = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const preferences = req.body;

    const result = await tasksService.setTaskPreferences(userId, preferences);
    // 201 create와 함께 지망 업무 반환
    res.status(201).json(result);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  postPreferences
};
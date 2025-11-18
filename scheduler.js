const cron = require('node-cron'); // 스케줄러
const algorithmService = require('./services/greedyAlgorithm.service');

const task = cron.schedule('0 2 * * 0', async () => {
  try {
    // 스케줄 promotion
    await algorithmService.promoteSchedules();
    
    // 업무 분배
    await algorithmService.runWeeklyAssignment();
    
  } catch (error) {
    console.error('error', error);
  }
});

// 스케줄러 시작
const startScheduler = () => {
  task.start();
};

module.exports = startScheduler;
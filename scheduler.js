const cron = require('node-cron'); // 스케줄러
const allocationService = require('./services/allocation.service');
const scheduleService = require('./services/schedules.service');

const task = cron.schedule('0 2 * * 0', async () => {
  try {
    // 스케줄 아카이빙, 승격, 복사 진행
    await scheduleService.archiveAndCopySchedule();
    
    // 업무 분배
    await allocationService.taskAllocation();
    
  } catch (error) {
    console.error('error', error);
  }
});

// 스케줄러 시작
const startScheduler = () => {
  task.start();
};

module.exports = startScheduler;
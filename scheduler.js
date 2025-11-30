const cron = require('node-cron'); // 스케줄러
const allocationService = require('./services/allocation.service'); // 업무 분배 알고리즘
const scheduleService = require('./services/schedules.service'); // 스케줄 아카이빙, 승격, 복제

const task = cron.schedule('*/5 * * * *', async () => {
  try {
    // 스케줄 아카이빙, 승격, 복사 진행
    console.log('start archiving, promotion, copy');
    await scheduleService.archiveAndCopySchedule();

    // 업무 분배
    console.log('start task allocation');
    await allocationService.runWeeklyAssignment();

  } catch (error) {
    console.error('[Scheduler Error]', error);
  }
});

// 스케줄러 시작
const startScheduler = () => {
  task.start();
};

module.exports = startScheduler;
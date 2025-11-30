const prisma = require('../prismaClient');
const { preprocessSchedule, prepareTaskPool, executeGreedyAssignment } = require('./core/allocation.logic');

// 각자의 FREE 시간에서 모든 멤버들의 QUIET 시간을 제거한 후 업무 할당

// 트랜잭션을 위한 쿼리 저장
const generateSaveQueries = (assignmentResults) => {
  // 트랜잭션 중 호출을 위한 배열
  const operations = [];

  // 배정이 된 업무로 배열 생성
  const assignedTasks = assignmentResults.taskPool.filter(task => task.isAssigned);

  if (assignedTasks.length > 0) {
    // DB 발사
    const createTimeBlock = prisma.ScheduleBlock.createMany({
      data: assignedTasks.map(task => ({
        // 누가
        userId: task.assignedUserId,
        // 어떤 업무를
        roomTaskId: task.id,
        // 언제 시작
        startTime: new Date(task.startTime),
        // 언제 끝
        endTime: new Date(task.endTime),
        // 업무 난이도
        difficulty: task.difficulty,
        // 스케줄 블록 type을 TASK로 변경
        type: 'TASK',
        // ACTIVE
        status: 'ACTIVE'
      }))
    });

    operations.push(createTimeBlock);
  }

  // 다음 주 배정 용 업무 부하 계산 
  for (const user of assignmentResults.users) {
    const updateUserWorkLoad = prisma.user.update({
      where: { id: user.userId },
      data: { workLoad: user.currentWorkLoad }
    });

    operations.push(updateUserWorkLoad);
  }

  return operations;
};


// 업무 분배 총괄 함수
const runWeeklyAssignment = async () => {

  // 방 정보를 가져올 때 사용자, 그 사용자의 ACTIVE 스케줄블럭, 선호 업무, 방 업무까지 포함
  const rooms = await prisma.room.findMany({
    include: {
      participants: {
        include: {
          scheduleBlocks: { where: { status: 'ACTIVE' } },
          taskPreferences: true
        }
      },
      RoomTasks: true
    }
  });

  //트랜잭션 때 사용을 위한 배열
  const transactionOperations = [];

  // 방마다 업무 분배 알고리즘 수행
  for (const room of rooms) {

    // 사용자 가용시간 전처리
    const userStates = await preprocessSchedule(room);

    // 업무 전처리 사전에 설정한 빈도만큼 복제
    const taskPool = prepareTaskPool(room.RoomTasks);

    // 가용시간 전처리된 사용자 정보, 업무들을 투입하여 그리디 알고리즘 실행, 사용자, 업무 목록 반환
    const assignmentResults = executeGreedyAssignment(userStates, taskPool);

    // 트랜잭션으로 일괄 저장
    const queries = generateSaveQueries(assignmentResults);
    transactionOperations.push(...queries);
  }

  // 트랜잭션 일괄 처리
  if (transactionOperations.length > 0) {
    await prisma.$transaction(transactionOperations);
  }
};

module.exports = {
  generateSaveQueries,
  runWeeklyAssignment,
}
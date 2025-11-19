// services/algorithm.service.js (신규 파일)
const prisma = require('../prismaClient');

/**
 * [스케줄러 작업 2]
 * 그리디 알고리즘을 실행하여 모든 방의 업무를 배정합니다.
 */
const runWeeklyAssignment = async () => {
  console.log('[Scheduler] 주간 업무 배분 알고리즘을 시작합니다...');

  // 1. [날짜 확정] 알고리즘이 배정할 "이번 주" 날짜 범위를 계산합니다.
  const today = new Date();
  // (today를 기준으로 '이번 주 월요일 ~ 일요일' 날짜 객체를 계산하는 로직)
  // const startOfWeek = ...
  // const endOfWeek = ...

  // 2. [방 조회] 모든 방을 가져옵니다.
  const allRooms = await prisma.room.findMany({
    include: {
      members: true, //
      RoomTasks: true, //
    },
  });

  // 3. (Loop) 방별로 알고리즘 실행
  for (const room of allRooms) {
    // 3-1. [데이터 로드] 이 방 멤버들의 ACTIVE 스케줄(ScheduleBlock),
    //      선호도(TaskPreference), 지난 주 가중치(workLoad)를 DB에서 조회합니다.
    
    // 3-2. [용량 계산] "방 전체 조용시간(QUIET 합집합)"을 계산합니다.
    
    // 3-3. [용량 계산] 각 멤버의 "최종 TASK 용량"을 계산합니다.
    //      (TASK - BUSY - 방 전체 QUIET)
        
    // 3-4. [알고리즘 1차] 1/2지망 + workLoad 높은 순(보상) 배분

    // 3-5. [알고리즘 2차] 남은 업무 + workLoad 낮은 순(균형) 배분
    
    // 3-6. [결과] 메모리에 배정된 AssignedTask 목록을 생성합니다.
  }

  // 4. (Transaction) 모든 계산이 끝난 후, 결과를 DB에 한꺼번에 저장
  await prisma.$transaction(async (tx) => {
    // 4-1. (선택) 지난 주의 AssignedTask 삭제
    // await tx.assignedTask.deleteMany(...);
    
    // 4-2. 이번 주 AssignedTask 일괄 생성 (createMany)
    // (이때 계산된 startTime / endTime 저장)
    
    // 4-3. 이번 주 workload 합계를 계산하여 User.workLoad 필드 업데이트
  });
  
  console.log('[Scheduler] 주간 업무 배분 완료.');
};

module.exports = {
  runWeeklyAssignment,
};
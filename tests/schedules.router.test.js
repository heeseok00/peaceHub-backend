const prisma = require('../prismaClient'); // prismaClient 경로 확인
const scheduleService = require('../services/schedules.service'); // 서비스 경로 확인

describe('Scheduler Logic (Archiving & Rolling)', () => {
  let user;

  // 1. 테스트용 유저 생성
  beforeAll(async () => {
    user = await prisma.user.create({
      data: {
        googleId: 'scheduler_test_user',
        email: 'scheduler@test.com',
        name: '스케줄러테스터',
      },
    });
  });

  // 2. 테스트 후 데이터 정리
  afterAll(async () => {
    await prisma.user.delete({ where: { id: user.id } });
    // (Cascade로 인해 ScheduleBlock, ScheduleHistory도 자동 삭제됨)
  });

  // 3. 각 테스트 전 데이터 초기화
  beforeEach(async () => {
    await prisma.scheduleBlock.deleteMany({ where: { userId: user.id } });
    await prisma.scheduleHistory.deleteMany({ where: { userId: user.id } });
  });

  it('지난 ACTIVE 스케줄은 아카이빙되고, TEMPORARY는 ACTIVE로 승격되며, 다음 주 TEMPORARY가 생성되어야 한다', async () => {
    // --- [Step 1] 데이터 세팅 (Setup) ---
    
    const now = new Date();
    const pastStart = new Date(now); pastStart.setDate(now.getDate() - 7); // 7일 전
    const pastEnd = new Date(now); pastEnd.setDate(now.getDate() - 7); // 7일 전 (이미 끝난 일정)

    const nextStart = new Date(now); nextStart.setDate(now.getDate() + 1); // 내일
    const nextEnd = new Date(now); nextEnd.setDate(now.getDate() + 1);

    // 1-1. [과거 데이터] (이미 날짜가 지난 ACTIVE 스케줄) -> 아카이빙 대상
    await prisma.scheduleBlock.create({
      data: {
        userId: user.id,
        status: 'ACTIVE',
        type: 'TASK',
        startTime: pastStart,
        endTime: pastEnd,
      },
    });

    // 1-2. [미래 데이터] (대기 중인 TEMPORARY 스케줄) -> 승격 대상
    await prisma.scheduleBlock.create({
      data: {
        userId: user.id,
        status: 'TEMPORARY',
        type: 'FREE',
        startTime: nextStart,
        endTime: nextEnd,
      },
    });

    // --- [Step 2] 함수 실행 (Action) ---
    await scheduleService.archiveAndCopySchedule();

    // --- [Step 3] 결과 검증 (Assertion) ---

    // 3-1. 아카이빙 검증: ScheduleHistory에 데이터가 생겼는가?
    const history = await prisma.scheduleHistory.findMany({ where: { userId: user.id } });
    expect(history.length).toBe(1);
    expect(history[0].type).toBe('TASK'); // 과거 데이터 타입

    // 3-2. 삭제 검증: 원본 ScheduleBlock에서 과거 ACTIVE 데이터가 사라졌는가?
    const oldActive = await prisma.scheduleBlock.findMany({ 
        where: { userId: user.id, status: 'ACTIVE', startTime: pastStart } 
    });
    expect(oldActive.length).toBe(0);

    // 3-3. 승격 검증: TEMPORARY였던 데이터가 ACTIVE로 바뀌었는가?
    const newActive = await prisma.scheduleBlock.findMany({
        where: { userId: user.id, status: 'ACTIVE', startTime: nextStart }
    });
    expect(newActive.length).toBe(1);
    expect(newActive[0].type).toBe('FREE');

    // 3-4. 복사(연장) 검증: 승격된 데이터를 기반으로 +7일 된 새 TEMPORARY가 생겼는가?
    // (nextStart + 7일)
    const expectedNextWeekStart = new Date(nextStart);
    expectedNextWeekStart.setDate(expectedNextWeekStart.getDate() + 7);

    const newTemporary = await prisma.scheduleBlock.findMany({
        where: { userId: user.id, status: 'TEMPORARY' }
    });
    expect(newTemporary.length).toBe(1);
    // 날짜 비교 (ISO 문자열로 변환해서 비교하는 것이 안전함)
    expect(newTemporary[0].startTime.toISOString()).toBe(expectedNextWeekStart.toISOString());
    expect(newTemporary[0].type).toBe('FREE');
  });
});
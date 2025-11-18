const request = require('supertest');
const app = require('../app'); // Express 앱 (app.js)
const prisma = require('../prismaClient'); // Prisma Client

// --- 1. 미들웨어 모킹 ---
const { isLoggedIn } = require('../middlewares/checkAuth.middleware');
const { validateBlock } = require('../middlewares/schedules.validator');

// 1-1. checkAuth (isLoggedIn) 모킹
jest.mock('../middlewares/checkAuth.middleware', () => ({
  // app.js에서는 'checkAuth'로 사용하지만, 원본 모듈 export 이름은 'isLoggedIn'
  isLoggedIn: jest.fn((req, res, next) => next()), 
}));

// 1-2. schedules.validator (validateBlock) 모킹
// (실제 유효성 검사는 별도로 테스트하고, 여기서는 통과시킵니다)
jest.mock('../middlewares/schedules.validator', () => ({
  validateBlock: jest.fn((req, res, next) => next()),
}));


// --- 테스트 스위트 ---
describe('Schedule API (/api/schedules)', () => {
  let userNew; // "신규 사용자" (ACTIVE 스케줄 없음)
  let userExisting; // "기존 사용자" (ACTIVE 스케줄 있음)
  let schedulePayload; // 프론트가 보낼 "완전한" 스케줄 배열

  // --- 2. 테스트 전/후 설정 ---
  beforeAll(async () => {
    // 2-1. 테스트용 유저 생성
    userNew = await prisma.user.create({
      data: { googleId: 'newUser@google', email: 'new@email.com', name: '신규유저' },
    });
    userExisting = await prisma.user.create({
      data: { googleId: 'existingUser@google', email: 'existing@email.com', name: '기존유저' },
    });

    // 2-2. "기존 사용자"에게는 'ACTIVE' 스케줄을 미리 생성
    await prisma.scheduleBlock.create({
      data: {
        userId: userExisting.id,
        dayOfWeek: 'MONDAY',
        type: 'TASK',
        startTime: 0,
        endTime: 1440,
        status: 'ACTIVE',
      },
    });

    // 2-3. 프론트가 POST로 보낼 스케줄 페이로드 정의
    schedulePayload = [
      { dayOfWeek: 'MONDAY', type: 'QUIET', startTime: 0, endTime: 600 },
      { dayOfWeek: 'MONDAY', type: 'TASK', startTime: 600, endTime: 1440 },
      // (Validator를 모킹했으므로, 7일치 24시간을 다 채우지 않아도 테스트 가능)
    ];
  });

  afterAll(async () => {
    // 2-4. 생성한 모든 유저 및 스케줄 삭제
    await prisma.user.deleteMany({
      where: { id: { in: [userNew.id, userExisting.id] } },
    });
    // (User 삭제 시 ScheduleBlock도 onDelete: Cascade로 자동 삭제됨)
  });

  // --- 3. POST /api/schedules/ 테스트 ---
  describe('POST / (스케줄 등록)', () => {
    it('신규 사용자(ACTIVE 없음)가 등록 시, ACTIVE와 TEMPORARY 2세트를 생성해야 합니다', async () => {
      // (1) "신규 유저"로 로그인한 척
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userNew;
        next();
      });

      // (2) API 호출
      const res = await request(app)
        .post('/api/schedules')
        .send(schedulePayload);

      // (3) 응답 검증 (ACTIVE 스케줄이 반환되어야 함)
      expect(res.status).toBe(201);
      expect(res.body.length).toBe(2);
      expect(res.body[0].status).toBe('ACTIVE');

      // (4) DB 검증 (ACTIVE 2개, TEMPORARY 2개, 총 4개)
      const dbCount = await prisma.scheduleBlock.count({ where: { userId: userNew.id } });
      expect(dbCount).toBe(4);
      const activeCount = await prisma.scheduleBlock.count({ where: { userId: userNew.id, status: 'ACTIVE' } });
      expect(activeCount).toBe(2);
    });

    it('기존 사용자(ACTIVE 있음)가 등록 시, TEMPORARY 1세트만 덮어써야 합니다', async () => {
      // (1) "기존 유저"로 로그인한 척
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userExisting;
        next();
      });

      // (2) API 호출
      const res = await request(app)
        .post('/api/schedules')
        .send(schedulePayload);

      // (3) 응답 검증 (TEMPORARY 스케줄이 반환되어야 함)
      expect(res.status).toBe(201);
      expect(res.body.length).toBe(2);
      expect(res.body[0].status).toBe('TEMPORARY');

      // (4) DB 검증 (기존 ACTIVE 1개 + 새 TEMPORARY 2개 = 총 3개)
      const dbCount = await prisma.scheduleBlock.count({ where: { userId: userExisting.id } });
      expect(dbCount).toBe(3);
      const activeCount = await prisma.scheduleBlock.count({ where: { userId: userExisting.id, status: 'ACTIVE' } });
      expect(activeCount).toBe(1); // 기존 ACTIVE는 건드리지 않음
    });
  });

  // --- 4. GET /api/schedules/... 테스트 ---
  describe('GET /ActiveSchedules (ACTIVE 조회)', () => {
    it('ACTIVE 스케줄만 반환해야 합니다', async () => {
      // (1) "기존 유저"로 로그인한 척
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userExisting;
        next();
      });

      // (2) API 호출
      const res = await request(app).get('/api/schedules/ActiveSchedules');

      // (3) 응답 검증 (beforeAll에서 1개 생성함)
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0].status).toBe('ACTIVE');
    });
  });

  describe('GET /TemporarySchedules (TEMPORARY 조회)', () => {
    it('TEMPORARY 스케줄만 반환해야 합니다', async () => {
      // (1) "기존 유저"로 로그인한 척
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userExisting;
        next();
      });

      // (2) API 호출
      const res = await request(app).get('/api/schedules/TemporarySchedules');

      // (3) 응답 검증 (POST 테스트에서 2개 생성함)
      // [주의] Jest는 테스트 파일을 병렬 실행할 수 있으므로,
      //       POST 테스트가 먼저 실행된다는 보장은 없으나,
      //       일반적으로 파일 내 describe 순서대로 실행됩니다.
      //       (만약 이 테스트가 실패하면, POST 테스트에서 생성된 데이터를 참조하지 않도록
      //        beforeEach에서 TEMPORARY 데이터를 따로 생성해야 합니다.)
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body[0].status).toBe('TEMPORARY');
    });
  });
});
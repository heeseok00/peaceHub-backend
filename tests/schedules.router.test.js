const request = require('supertest');
const app = require('../app'); // app.js 경로 확인
const prisma = require('../prismaClient'); // prismaClient.js 경로 확인
const { isLoggedIn } = require('../middlewares/checkAuth.middleware');

// 1. 인증 미들웨어 모킹 (로그인한 척)
jest.mock('../middlewares/checkAuth.middleware', () => ({
  isLoggedIn: jest.fn((req, res, next) => next()),
}));

describe('Schedule API (/api/schedules)', () => {
  let userNew; // 신규 유저 (스케줄 없음)
  let userExisting; // 기존 유저 (스케줄 있음)
  let validSchedulePayload; // 정상적인 24시간 스케줄 데이터

  // 테스트용 날짜 생성 헬퍼 (YYYY-MM-DDTHH:mm:ss.sssZ)
  const makeDate = (dayStr, hour) => {
    // dayStr: '2025-11-24' (월요일 가정)
    // hour: 0 ~ 24
    const date = new Date(`${dayStr}T00:00:00.000Z`);
    date.setUTCHours(hour);
    return date.toISOString();
  };

  const targetDate = '2025-11-24'; // 테스트할 날짜 (월요일)

  beforeAll(async () => {
    // 2-1. 테스트 유저 생성
    userNew = await prisma.user.create({
      data: { googleId: 'new_test_id', email: 'new@test.com', name: '신규' },
    });
    userExisting = await prisma.user.create({
      data: { googleId: 'exist_test_id', email: 'exist@test.com', name: '기존' },
    });

    // 2-2. 기존 유저에게 ACTIVE 스케줄 미리 생성
    await prisma.scheduleBlock.create({
      data: {
        userId: userExisting.id,
        startTime: new Date(`${targetDate}T00:00:00.000Z`),
        endTime: new Date(`${targetDate}T23:59:59.999Z`), // 편의상 하루 전체
        type: 'TASK',
        status: 'ACTIVE',
      },
    });

    // 2-3. 유효한 24시간 Payload 준비 (월요일 하루 꽉 채움)
    validSchedulePayload = [
      {
        type: 'QUIET',
        startTime: makeDate(targetDate, 0), // 00:00
        endTime: makeDate(targetDate, 9),   // 09:00
      },
      {
        type: 'FREE',
        startTime: makeDate(targetDate, 9), // 09:00
        endTime: makeDate(targetDate, 18),  // 18:00
      },
      {
        type: 'BUSY',
        startTime: makeDate(targetDate, 18), // 18:00
        endTime: makeDate(targetDate, 24),   // 24:00 (다음날 00:00)
      },
    ];
  });

  afterAll(async () => {
    // 데이터 정리
    await prisma.user.deleteMany({
      where: { id: { in: [userNew.id, userExisting.id] } },
    });
  });

  // --- 테스트 시작 ---

  describe('POST / (스케줄 등록/수정)', () => {
    // 1. 정상 케이스 테스트
    it('신규 유저가 등록하면 ACTIVE와 TEMPORARY가 모두 생성되어야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userNew;
        next();
      });

      const res = await request(app)
        .post('/api/schedules')
        .send(validSchedulePayload);

      expect(res.status).toBe(201);
      // 응답은 ACTIVE 상태의 데이터가 와야 함 (서비스 로직)
      expect(res.body.length).toBe(3);
      expect(res.body[0].status).toBe('ACTIVE');

      // DB 확인: 총 6개 (ACTIVE 3개 + TEMPORARY 3개)여야 함
      const count = await prisma.scheduleBlock.count({ where: { userId: userNew.id } });
      expect(count).toBe(6);
    });

    it('기존 유저가 등록하면 TEMPORARY만 업데이트되고 ACTIVE는 유지되어야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userExisting;
        next();
      });

      const res = await request(app)
        .post('/api/schedules')
        .send(validSchedulePayload);

      expect(res.status).toBe(201);
      // 응답은 TEMPORARY 상태의 데이터가 와야 함
      expect(res.body[0].status).toBe('TEMPORARY');

      // DB 확인: 기존 ACTIVE(1개) + 새 TEMPORARY(3개) = 4개
      const activeCount = await prisma.scheduleBlock.count({
        where: { userId: userExisting.id, status: 'ACTIVE' },
      });
      expect(activeCount).toBe(1); // 기존 것 유지
    });

    // 2. Validator 실패 케이스 테스트
    it('배열이 아니면 400 에러', async () => {
      const res = await request(app).post('/api/schedules').send({ invalid: 'object' });
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/array/);
    });

    it('유효하지 않은 타입이나 날짜 형식이면 400 에러', async () => {
      const invalidPayload = [{ ...validSchedulePayload[0], type: 'INVALID_TYPE' }];
      const res = await request(app).post('/api/schedules').send(invalidPayload);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/invalid block/);
    });

    it('시작 시간이 종료 시간보다 늦으면 400 에러', async () => {
      const invalidPayload = [{ 
        ...validSchedulePayload[0], 
        startTime: makeDate(targetDate, 10), 
        endTime: makeDate(targetDate, 9) 
      }];
      const res = await request(app).post('/api/schedules').send(invalidPayload);
      expect(res.status).toBe(400);
    });

    it('00:00에 시작하지 않으면 400 에러 (빈틈 검사)', async () => {
      const gapPayload = [
        { type: 'FREE', startTime: makeDate(targetDate, 1), endTime: makeDate(targetDate, 24) }
      ];
      const res = await request(app).post('/api/schedules').send(gapPayload);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/00시 00분 공백/);
    });

    it('24:00에 끝나지 않으면 400 에러 (빈틈 검사)', async () => {
      const gapPayload = [
        { type: 'FREE', startTime: makeDate(targetDate, 0), endTime: makeDate(targetDate, 23) }
      ];
      const res = await request(app).post('/api/schedules').send(gapPayload);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/24시 00분 공백/);
    });

    it('중간에 시간이 비면 400 에러 (빈틈 검사)', async () => {
      const gapPayload = [
        { type: 'FREE', startTime: makeDate(targetDate, 0), endTime: makeDate(targetDate, 10) },
        // 10~12시 빔
        { type: 'FREE', startTime: makeDate(targetDate, 12), endTime: makeDate(targetDate, 24) }
      ];
      const res = await request(app).post('/api/schedules').send(gapPayload);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/중간 공백/);
    });

    it('시간이 겹치면 409 에러 (겹침 검사)', async () => {
      const overlapPayload = [
        { type: 'FREE', startTime: makeDate(targetDate, 0), endTime: makeDate(targetDate, 10) },
        { type: 'BUSY', startTime: makeDate(targetDate, 9), endTime: makeDate(targetDate, 24) } // 9~10시 겹침
      ];
      const res = await request(app).post('/api/schedules').send(overlapPayload);
      expect(res.status).toBe(409);
      expect(res.body.message).toMatch(/time conflict/);
    });
  });

  describe('GET /ActiveSchedules', () => {
    it('ACTIVE 상태의 스케줄만 반환해야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userNew; // 위에서 3개 생성함
        next();
      });

      const res = await request(app).get('/api/schedules/ActiveSchedules');
      
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body[0].status).toBe('ACTIVE');
    });
  });

  describe('GET /TemporarySchedules', () => {
    it('TEMPORARY 상태의 스케줄만 반환해야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => {
        req.user = userNew; // 위에서 3개 생성함
        next();
      });

      const res = await request(app).get('/api/schedules/TemporarySchedules');
      
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body[0].status).toBe('TEMPORARY');
    });
  });
});
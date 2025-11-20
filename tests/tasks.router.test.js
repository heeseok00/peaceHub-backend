const request = require('supertest');
const app = require('../app'); // app.js 경로 확인
const prisma = require('../prismaClient'); // prismaClient.js 경로 확인
const { isLoggedIn } = require('../middlewares/checkAuth.middleware');
const { requireRoom } = require('../middlewares/checkRoom.middleware');

// 1. 미들웨어 모킹 (로그인 및 방 참여 상태 가정)
jest.mock('../middlewares/checkAuth.middleware', () => ({
  isLoggedIn: jest.fn((req, res, next) => next()),
}));

jest.mock('../middlewares/checkRoom.middleware', () => ({
  requireRoom: jest.fn((req, res, next) => next()),
}));

describe('Tasks API (/api/tasks)', () => {
  let user;
  let room;
  let task1, task2; // 테스트용 업무

  // --- 2. 테스트 데이터 셋업 ---
  beforeAll(async () => {
    // 2-1. 방 생성
    room = await prisma.room.create({
      data: {
        name: '업무테스트방',
        inviteCode: 'TASK_TEST_01',
        owner: {
          create: {
            googleId: 'task_tester',
            email: 'task@test.com',
            name: '테스터',
          }
        }
      },
      include: { owner: true }
    });
    
    user = room.owner; // 방장을 테스트 유저로 사용
    
    // 방 참여 정보 업데이트 (실제 로직 반영)
    await prisma.user.update({
        where: { id: user.id },
        data: { roomId: room.id }
    });

    // 2-2. 테스트용 업무(RoomTask) 2개 생성
    task1 = await prisma.roomTask.create({
      data: {
        title: '설거지',
        difficulty: 2,
        estimatedTime: 60,
        frequency: 1,
        roomId: room.id
      }
    });

    task2 = await prisma.roomTask.create({
      data: {
        title: '빨래',
        difficulty: 3,
        estimatedTime: 60,
        frequency: 1,
        roomId: room.id
      }
    });
  });

  afterAll(async () => {
    // 데이터 정리
    await prisma.user.deleteMany({ where: { id: user.id } });
    await prisma.room.deleteMany({ where: { id: room.id } });
  });

  // --- 3. 테스트 케이스 ---

  describe('GET / (업무 목록 조회)', () => {
    it('방에 등록된 업무 목록을 반환해야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => { req.user = user; next(); });
      requireRoom.mockImplementation((req, res, next) => { req.user = user; next(); });

      const res = await request(app).get('/api/tasks');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(2);
      // 생성한 업무가 포함되어 있는지 확인
      const titles = res.body.map(t => t.title);
      expect(titles).toContain('설거지');
      expect(titles).toContain('빨래');
    });
  });

  describe('POST /preferences (선호 업무 저장)', () => {
    it('유효한 선호도를 제출하면 201과 저장된 결과를 반환해야 한다', async () => {
      isLoggedIn.mockImplementation((req, res, next) => { req.user = user; next(); });

      const payload = [
        { taskId: task1.id, priority: 1 },
        { taskId: task2.id, priority: 2 }
      ];

      const res = await request(app)
        .post('/api/tasks/preferences')
        .send(payload);

      expect(res.status).toBe(201);
      expect(res.body.length).toBe(2);
      expect(res.body[0].taskId).toBe(task1.id);
      expect(res.body[0].priority).toBe(1);

      // DB 검증
      const dbPreferences = await prisma.taskPreference.findMany({ where: { userId: user.id } });
      expect(dbPreferences.length).toBe(2);
    });

    it('우선순위가 중복되면 400 에러를 반환해야 한다 (Validator)', async () => {
      const invalidPayload = [
        { taskId: task1.id, priority: 1 },
        { taskId: task2.id, priority: 1 } // 중복된 우선순위
      ];

      const res = await request(app)
        .post('/api/tasks/preferences')
        .send(invalidPayload);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('priority duplication');
    });

    it('동일한 업무를 중복 선택하면 400 에러를 반환해야 한다 (Validator)', async () => {
      const invalidPayload = [
        { taskId: task1.id, priority: 1 },
        { taskId: task1.id, priority: 2 } // 중복된 업무 ID
      ];

      const res = await request(app)
        .post('/api/tasks/preferences')
        .send(invalidPayload);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('task duplication');
    });

    it('존재하지 않거나 다른 방의 업무 ID를 보내면 400 에러를 반환해야 한다 (Service)', async () => {
      // 가짜 업무 ID 생성 (형식은 맞지만 DB에 없거나 내 방 것이 아님)
      const fakeTaskId = 'clx_fake_task_id';
      const invalidPayload = [
        { taskId: fakeTaskId, priority: 1 }
      ];

      const res = await request(app)
        .post('/api/tasks/preferences')
        .send(invalidPayload);

      // Service에서 INVALID_TASK_ID 에러를 던지고 Controller가 잡아서 처리
      // (Controller에서 400으로 처리하도록 작성되어 있어야 함)
      expect(res.status).toBe(400);
    });
  });
});
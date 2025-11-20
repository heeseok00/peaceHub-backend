// const request = require('supertest');
// const app = require('../app'); // app.js 경로 확인 필요
// const prisma = require('../prismaClient'); // prismaClient.js 경로 확인 필요
// const scheduleService = require('../services/schedules.service'); // 서비스 함수 직접 호출용

// // --- 1. 미들웨어 모킹 ---
// jest.mock('../middlewares/checkAuth.middleware', () => ({
//   isLoggedIn: jest.fn((req, res, next) => next()),
// }));

// jest.mock('../middlewares/checkRoom.middleware', () => ({
//   requireRoom: jest.fn((req, res, next) => next()),
// }));

// // Validator가 복잡하므로 테스트에서는 통과시킨다고 가정
// jest.mock('../middlewares/schedules.validator', () => ({
//   validateBlock: jest.fn((req, res, next) => next()),
// }));

// const { isLoggedIn } = require('../middlewares/checkAuth.middleware');

// describe('Schedule API & Service Test', () => {
//   let userNew, userExisting;
//   let testRoom;
//   const targetDate = '2025-11-24'; // 테스트 기준 날짜 (월요일)

//   // 날짜 생성 헬퍼
//   const makeDate = (dayStr, hour) => {
//     const date = new Date(`${dayStr}T00:00:00.000Z`);
//     date.setUTCHours(hour);
//     return date.toISOString();
//   };

//   beforeAll(async () => {
//     // 2-1. 방 생성
//     testRoom = await prisma.room.create({
//         data: {
//             name: '테스트방',
//             inviteCode: 'SCH_TEST_01',
//             owner: {
//                 create: {
//                     googleId: 'owner_google_id',
//                     email: 'owner@test.com',
//                     name: '방장'
//                 }
//             }
//         }
//     });

//     await prisma.user.update({
//         where: { googleId: 'owner_google_id'},
//         data: { roomId: testRoom.id }
//     });

//     // 2-2. 유저 생성 (기존 유저, 신규 유저)
//     userExisting = await prisma.user.create({
//       data: { 
//           googleId: 'exist_test', email: 'exist@test.com', name: '기존유저',
//           roomId: testRoom.id // 방 참여
//       },
//     });
//     userNew = await prisma.user.create({
//       data: { 
//           googleId: 'new_test', email: 'new@test.com', name: '신규유저',
//           roomId: testRoom.id // 방 참여
//       },
//     });

//     // 2-3. 기존 유저에게 ACTIVE 스케줄 생성
//     await prisma.scheduleBlock.create({
//       data: {
//         userId: userExisting.id,
//         startTime: new Date(`${targetDate}T00:00:00.000Z`),
//         endTime: new Date(`${targetDate}T23:59:59.999Z`),
//         type: 'TASK',
//         status: 'ACTIVE',
//       },
//     });
//   });

//   afterAll(async () => {
//     await prisma.user.deleteMany({ where: { id: { in: [userNew.id, userExisting.id, testRoom.ownerId] } } });
//     await prisma.room.deleteMany({ where: { id: testRoom.id } });
//   });

//   // --- 테스트 케이스 ---

//   // 1. POST /api/schedules (스케줄 등록)
//   describe('POST /api/schedules', () => {
//     const payload = [
//         { type: 'FREE', startTime: makeDate(targetDate, 0), endTime: makeDate(targetDate, 24) }
//     ];

//     it('신규 유저: ACTIVE, TEMPORARY 모두 생성하고 201 반환 (Body 없음)', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userNew; next(); });

//       const res = await request(app).post('/api/schedules').send(payload);
      
//       expect(res.status).toBe(201);
//       expect(res.body).toEqual({}); // 신규 유저는 반환값 없음

//       const count = await prisma.scheduleBlock.count({ where: { userId: userNew.id } });
//       expect(count).toBe(2); // ACTIVE 1개 + TEMPORARY 1개
//     });

//     it('기존 유저: TEMPORARY만 수정하고 201과 데이터 반환', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userExisting; next(); });

//       const res = await request(app).post('/api/schedules').send(payload);

//       expect(res.status).toBe(201);
//       expect(res.body.length).toBeGreaterThan(0); // 데이터 반환
//       expect(res.body[0].status).toBe('TEMPORARY');
//     });
//   });

//   // 2. GET 조회 API들
//   describe('GET APIs', () => {
//     it('GET /activeSchedules: ACTIVE 스케줄 조회', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userExisting; next(); });
//       const res = await request(app).get('/api/schedules/activeSchedules');
//       expect(res.status).toBe(200);
//       expect(res.body[0].status).toBe('ACTIVE');
//     });

//     it('GET /temporarySchedules: TEMPORARY 스케줄 조회', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userExisting; next(); });
//       const res = await request(app).get('/api/schedules/temporarySchedules');
//       expect(res.status).toBe(200);
//       expect(res.body[0].status).toBe('TEMPORARY');
//     });

//     it('GET /daily: 특정 날짜 스케줄 조회', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userExisting; next(); });
//       const res = await request(app).get(`/api/schedules/daily?date=${targetDate}`);
      
//       expect(res.status).toBe(200);
//       // ACTIVE 스케줄이 조회되어야 함
//       expect(res.body.length).toBeGreaterThan(0);
//       // 날짜가 일치하는지 확인 (ISO 문자열 포함 여부)
//       expect(res.body[0].startTime).toContain(targetDate);
//     });

//     it('GET /memberDaily: 방 멤버 전체 스케줄 조회', async () => {
//       isLoggedIn.mockImplementation((req, res, next) => { req.user = userNew; next(); }); // 신규 유저가 요청
//       const res = await request(app).get(`/api/schedules/memberDaily?date=${targetDate}`);
      
//       expect(res.status).toBe(200);
//       // 방금 전 테스트에서 userNew도 스케줄을 만들었고, userExisting도 있으므로 데이터가 있어야 함
//       expect(res.body.length).toBeGreaterThan(0);
//     });
//   });

//   // 3. 스케줄러 로직 (Service 직접 호출)
//   describe('Scheduler Logic (Archive & Copy)', () => {
//     it('archiveAndCopySchedule: 아카이빙 -> 승격 -> 복사가 수행되어야 한다', async () => {
//       // [상황 설정]
//       // userExisting에게는 과거의 ACTIVE 데이터가 있어야 함
//       const pastDate = '2020-01-01';
//       await prisma.scheduleBlock.create({
//         data: {
//             userId: userExisting.id,
//             status: 'ACTIVE',
//             type: 'TASK',
//             startTime: new Date(`${pastDate}T10:00:00.000Z`),
//             endTime: new Date(`${pastDate}T12:00:00.000Z`),
//         }
//       });

//       // userExisting에게는 미래의 TEMPORARY 데이터가 있어야 함 (POST 테스트에서 생성됨)
      
//       // [실행]
//       await scheduleService.archiveAndCopySchedule();

//       // [검증 1] 아카이빙: 과거 데이터가 History로 갔는가?
//       const history = await prisma.scheduleHistory.findMany({ where: { userId: userExisting.id } });
//       // 최소 1개 이상 (방금 만든 것)
//       const archivedItem = history.find(h => new Date(h.startTime).toISOString().includes(pastDate));
//       expect(archivedItem).toBeDefined();

//       // [검증 2] 승격: POST 테스트에서 만든 TEMPORARY가 ACTIVE가 되었는가?
//       // (날짜가 targetDate인 데이터가 ACTIVE로 존재해야 함)
//       const promoted = await prisma.scheduleBlock.findMany({
//         where: { userId: userExisting.id, status: 'ACTIVE', startTime: { gte: new Date(targetDate) } }
//       });
//       expect(promoted.length).toBeGreaterThan(0);

//       // [검증 3] 복사: 승격된 데이터를 기반으로 +7일 된 TEMPORARY가 생겼는가?
//       // targetDate + 7일
//       const nextWeekDate = new Date(targetDate);
//       nextWeekDate.setDate(nextWeekDate.getDate() + 7);
//       const nextWeekStr = nextWeekDate.toISOString().split('T')[0];

//       const copied = await prisma.scheduleBlock.findMany({
//         where: { userId: userExisting.id, status: 'TEMPORARY' }
//       });
      
//       // 복사된 데이터 중 날짜가 +7일 된 것이 있는지 확인
//       const hasNextWeek = copied.some(c => new Date(c.startTime).toISOString().includes(nextWeekStr));
//       expect(hasNextWeek).toBe(true);
//     });
//   });

// });
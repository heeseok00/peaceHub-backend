const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 중복 실행 방지를 위해 데이터가 있는지 먼저 확인
  const count = await prisma.roomTaskTemplate.count();
  
  if (count > 0) {
    console.log('skip duplicate data');
    return;
  }

  const basicTasks = [
    {
      title: '화장실 청소',
      difficulty: 8,
      frequency: 1,
      estimatedTime: 120
    },
    {
      title: '쓰레기 버리기',
      difficulty: 4,
      frequency: 2,
      estimatedTime: 120
    },
    {
      title: '청소기 돌리기',
      difficulty: 3,
      frequency: 1,
      estimatedTime: 120
    },
    {
      title: '빨래하기',
      difficulty: 3,
      frequency: 2,
      estimatedTime: 120
    },
    {
      title: '설거지',
      difficulty: 2,
      frequency: 4,
      estimatedTime: 120
    },
    {
      title: '장보기',
      difficulty: 7,
      frequency: 1,
      estimatedTime: 120
    },
    {
      title: '냉장고 관리',
      difficulty: 6,
      frequency: 1,
      estimatedTime: 120
    },
    {
      title: '걸레질',
      difficulty: 4,
      frequency: 1,
      estimatedTime: 120
    },
  ];

  // 데이터 삽입
  await prisma.roomTaskTemplate.createMany({
    data: basicTasks,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
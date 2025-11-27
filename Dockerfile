# Base Image 선택
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 패키지 설치 복사
COPY package*.json ./

# 의존성 설치
RUN npm install --production

# 소스 코드 복사
COPY . .

# prisma client 생성
RUN npx prisma generate

# 컨테이너 포트 지정
EXPOSE 8000

# 
CMD ["npm", "start"]
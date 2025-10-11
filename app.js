const express = require('express');
const passport = require('passport');
const passportConfig = require('./config/passport');
const authRouter = require('./routes/auth.router'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Passport 설정 실행
passportConfig();

app.use(express.json());

// Passport 미들웨어 초기화
app.use(passport.initialize());

// 라우터 연결
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(port, () => {
  console.log(`port num:${port}`);
});
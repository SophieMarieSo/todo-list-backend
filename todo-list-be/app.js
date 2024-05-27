const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
require('dotenv').config();
const cors = require('cors');

const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log('====================================');
console.log(MONGODB_URI_PROD);
console.log('====================================');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongoose connected'))
  .catch((err) => console.log('DB connection failed', err));

app.listen(process.env.PORT || 5000, () => {
  console.log('server is on 5000');
});

// 1. 회원가입
// 이메일, 비밀번호, 이름을 입력해서 보낸다
// 받은 정보를 저장한다 (DB model 필요)
// 비밀번호를 암호화 시켜서 저장

// 1-(1) Router
// 1-(2) Model
// 1-(3) 데이터 저장 (가입여부 확인, pw 암호화)
// 1-(4) fe에 응답을 보낸다

// ========================================================

// 2. 로그인
// 유저가 이메일, 비밀번호를 입력해서 보낸다
// DB에 해당 이메일과 비밀번호를 가진 유저가 있는지 확인한다
// 없으면 로그인 실패
// 있으면 유저정보 + 토큰을 보낸다 (한번 로그인하면 유지되도록)
// 토큰 내에는 유저정보와 만료정보 등이 들어있다
// 프론트엔즈에서 이 정보를 저장한다

// 2-(1). Router
// 2-(2). email, password 정보 읽어오기
// 2-(3). email을 가지고 유저정보 가져오기
// 2-(4). 이 유저 디비에 있는 패스워드와 프론트에느가 보낸 패스워드가 같은지 비교
// 2-(5). 맞으면 토큰 발행
// 2-(6). 틀리면 에러메시지 보낸다
// 2-(7). 응답으로 유저정보 + 토큰을 보낸다

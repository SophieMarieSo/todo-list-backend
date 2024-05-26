const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-list`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongoose connected'))
  .catch((err) => console.log('DB connection failed', err));

app.listen(5000, () => {
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

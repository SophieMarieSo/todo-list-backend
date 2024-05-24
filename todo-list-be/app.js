const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use('/api', indexRouter);
app.use(cors());

const mongoURI = `mongodb://localhost:27017/todo-list`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongoose connected'))
  .catch((err) => console.log('DB connection failed', err));

app.listen(5000, () => {
  console.log('server is on 5000');
});

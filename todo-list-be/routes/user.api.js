const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

router.post('/', userController.createUser);
// get은 reqBody를 사용할 수 없다
router.post('/login', userController.loginWithEmail);

module.exports = router;

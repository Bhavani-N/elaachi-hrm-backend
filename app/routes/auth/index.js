const express = require('express');
const router = express.Router();

const { login, forgot_pwd } = require('../../controllers/auth');

router.route('/signup')
    .post(login.signup);

router.route('/login')
    .post(login.login);

router.route('/forgot-password')
    .post(forgot_pwd.forgot_Password);

module.exports = router;
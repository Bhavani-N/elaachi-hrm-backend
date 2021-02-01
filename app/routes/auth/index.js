const express = require('express');
const router = express.Router();

const { login, forgot_pwd, resetPassword } = require('../../controllers/auth');

router.route('/signup')
    .post(login.signup);

router.route('/login')
    .post(login.login);

router.route('/forgot-password')
    .post(forgot_pwd.forgot_Password);

router.route('/reset-password')
    .post(resetPassword.reset_password);

module.exports = router;
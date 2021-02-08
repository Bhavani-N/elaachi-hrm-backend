const { SendMail } = require('../../lib');
const { URLSearchParams, URL } = require('url');
const config = require('../../../config/production/production');
const { HOST_ADDR }= config;
const ejs = require("ejs");

async function send(otpToken, email) {
    const otp = otpToken;
    const params = new URLSearchParams({
        otp
    });
    const host = HOST_ADDR.ui;
    const url = new URL(`${host}/auth/newpassword`);
    url.search = params.toString();
    ejs.renderFile(__dirname + "/emailTemplates/forgotTemplate.ejs", { url: url.href }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            return SendMail.send(email, {
                html:data,
                subject: 'Password Reset Link'
            });
        }

    });
}

module.exports = {
    send,
};
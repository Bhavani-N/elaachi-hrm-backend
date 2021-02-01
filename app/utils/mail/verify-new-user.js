const { SendMail } = require('../../lib');
const { URLSearchParams, URL } = require('url');
const config = require('../../../config/production/production');
const { HOST_ADDR }= config;

const ejs = require("ejs");

async function send(otpToken, email) {
    const otp = otpToken;
    const params = new URLSearchParams({
        otp,
        verify: 'account'
    });

    const host = HOST_ADDR.server;
    const url = new URL(`${host}/api/v1/auth/verify`);
    url.search = params.toString();
	ejs.renderFile(__dirname + "/emailTemplates/verifyTemplate.ejs", { url: url.href }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            return SendMail.send(email, {
                html:data,
				subject: 'Email Verification'
			});
        }

    });
}

module.exports = {
    send
};
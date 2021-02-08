const { SendMail } = require('../../lib');
const ejs = require("ejs");

async function send(email) {
    ejs.renderFile(__dirname + "/emailTemplates/HrTemplate.ejs", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            return SendMail.send(email, {
                html:data,
                subject: 'HR Approval Required'
            });
        }

    });
}

module.exports = {
    send,
};
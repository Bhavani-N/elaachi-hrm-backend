const SendPasswordResetMail = require('./forgotPassword-verificationMail');
const NewAccountVerification = require('./verify-new-user');
const HRApprovalMail = require('./HrApprovalMail');

module.exports = {
    SendPasswordResetMail,
    NewAccountVerification,
    HRApprovalMail
};
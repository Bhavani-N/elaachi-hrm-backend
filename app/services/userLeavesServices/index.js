const { createUserLeave } = require('./createUserLeave');
const { deleteUserLeave } = require('./deleteUserLeave');
const { getUserLeave } = require('./getUserLeave');
const { updateUserLeave } = require('./updateUserLeave');

module.exports = {
    createUserLeave,
    deleteUserLeave,
    getUserLeave,
    updateUserLeave
}
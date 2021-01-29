const {createStaffService }= require('./createStaff');
const {deleteStaff} = require('./deleteStaff');
const {getStaff, getStaffWithPassword} = require('./getStaff');
const { updateStaff} = require('./updateStaff');

module.exports = {
    createStaffService,
    deleteStaff,
    getStaff,
    getStaffWithPassword,
    updateStaff
}
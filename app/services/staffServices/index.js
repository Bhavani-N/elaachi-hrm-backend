const {createStaffService }= require('./createStaff');
const {deleteStaff} = require('./deleteStaff');
const {getStaff,getStaffById, getStaffWithPassword} = require('./getStaff');
const { updateStaff} = require('./updateStaff');

module.exports = {
    createStaffService,
    deleteStaff,
    getStaff,
    getStaffById,
    getStaffWithPassword,
    updateStaff
}
const {createStaffService }= require('./createStaff');
const {deleteStaff} = require('./deleteStaff');
const {getStaff,getStaffById, getStaffWithPassword} = require('./getStaff');
const { updateStaff, updateStaffById} = require('./updateStaff');

module.exports = {
    createStaffService,
    deleteStaff,
    getStaff,
    getStaffById,
    getStaffWithPassword,
    updateStaff,
    updateStaffById
}
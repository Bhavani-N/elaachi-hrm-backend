const { LeaveType } = require('../../database');

async function getLeaveTypeById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await LeaveType.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getLeaveTypeByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await LeaveType.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllLeaveTypes() {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await LeaveType.find();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
   getLeaveTypeById,
   getLeaveTypeByQuery,
   getAllLeaveTypes
}


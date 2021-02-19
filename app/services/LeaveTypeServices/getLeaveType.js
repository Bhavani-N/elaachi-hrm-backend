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

async function getAllLeaveTypes(page = 1) {
    const pageSize = 10;
    const skip = (page - 1) * pageSize; 
    return new Promise(async(resolve, reject) => {
        try {
            let data = await LeaveType.find({})
            .sort({ _id: -1 }) 
            .skip(skip)
            .limit(pageSize) // 'page size'
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


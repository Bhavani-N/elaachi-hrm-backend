const { userLeave } = require('../../database');

async function getUserLeaveById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await userLeave.findById(id).populate('leaveTypeId').exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getUserLeaveByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await userLeave.findOne(query).populate('leaveTypeId').exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllUserLeaves(page = 1) {
    const pageSize = 10;
    const skip = (page - 1) * pageSize; 
    return new Promise(async(resolve, reject) => {
        try {
            let data = await userLeave.find({})
                .sort({ dateFrom: -1 }) 
                .skip(skip)
                .limit(pageSize) // 'page size'
                .exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getUserLeaveById,
    getUserLeaveByQuery,
    getAllUserLeaves
}


const { userLeave } = require('../../database');

async function getUserLeaveById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await userLeave.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getUserLeaveByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await userLeave.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllUserLeaves() {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await userLeave.find();
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


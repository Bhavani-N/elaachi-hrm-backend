const { userLeave } = require('../../database');

async function getuserLeaveById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await userLeave.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getuserLeaveByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await userLeave.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAlluserLeaves() {
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
    getuserLeaveById,
    getuserLeaveByQuery,
    getAlluserLeaves
}


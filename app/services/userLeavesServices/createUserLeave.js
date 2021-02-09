const { userLeave } = require('../../database');

async function createUserLeave(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const result = new userLeave(data);
            const userLeaveData = await result.save();
            resolve(userLeaveData)
        }catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createUserLeave
}
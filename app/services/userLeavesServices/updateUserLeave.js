const { userLeave } = require('../../database');

async function updateUserLeave(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await userLeave.findOneAndUpdate({_id: id}, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateUserLeave
}
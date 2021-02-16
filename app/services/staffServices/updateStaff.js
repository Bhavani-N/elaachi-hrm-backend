const { Staff } = require('../../database')

async function updateStaff(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await Staff.findOneAndUpdate(id, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    }) 
}

async function updateStaffById(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await Staff.findByIdAndUpdate(id, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateStaff,
    updateStaffById
}
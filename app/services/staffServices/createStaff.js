const { Staff } = require('../../database');

async function createStaffService(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const staffDetails = new Staff.Staff(data);
            const result = await staffDetails.save();
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createStaffService
}


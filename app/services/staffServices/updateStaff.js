const { staff } = require('../../database')

async function updateStaff(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await staff.Staff.findOneAndUpdate(id, data, { new: true }).populate('companyId').exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateStaff
}
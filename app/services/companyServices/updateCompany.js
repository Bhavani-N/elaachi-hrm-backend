const { Company } = require('../../database');

async function updateCompany(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await Company.findOneAndUpdate({_id: id}, data, { new: true }).exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updateCompany
}
const { Company } = require('../../database');

async function createCompany(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const result = new Company(data);
            const companyData = await result.save();
            resolve(companyData)
        }catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createCompany
}
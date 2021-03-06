const { Company } = require('../../database');

async function getCompanyById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await Company.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getCompanyByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await Company.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllCompanies() {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await Company.find();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getCompanyById,
    getCompanyByQuery,
    getAllCompanies
}


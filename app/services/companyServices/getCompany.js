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

// async function getAllCompanies(filters) {
//     let query = filters.query ? filters.query : {};
//     let selectFrom = filters.selectFrom ? filters.selectFrom : {};
//     let sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
//     let pageNum = filters.pageNum ? filters.pageNum : 1;
//     let pageSize = filters.pageSize ? filters.pageSize : 20;

//     return new Promise(async (resolve, reject) => {
//         try {
//             let data = await Company.find(query)
//             .select(selectFrom)
//             .sort(sortBy)
//             .skip((pageNum-1) * pageSize)
//             .limit(parseInt(pageSize))
//             .lean()
//             .exec();
//             resolve(data)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

module.exports = {
    getCompanyById,
    getCompanyByQuery,
    getAllCompanies
}


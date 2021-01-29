const { Company } = require('../../database');

async function deleteById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Company.findOneAndRemove({_id: id});
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

async function deleteByQuery(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Company.findOneAndRemove(query);
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    deleteById,
    deleteByQuery
}
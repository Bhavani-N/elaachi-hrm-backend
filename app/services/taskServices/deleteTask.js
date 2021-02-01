const { Task } = require('../../database');

async function deleteById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Task.Task.findOneAndRemove({_id: id});
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

async function deleteByQuery(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Task.Task.findOneAndRemove(query);
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
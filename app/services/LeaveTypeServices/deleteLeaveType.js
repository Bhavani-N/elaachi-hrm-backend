const { LeaveType } = require('../../database');

async function deleteById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await LeaveType.findOneAndRemove({_id: id});
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

async function deleteByQuery(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await LeaveType.findOneAndRemove(query);
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
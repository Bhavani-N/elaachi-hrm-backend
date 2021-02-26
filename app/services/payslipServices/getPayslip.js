const { PaySlip } = require('../../database');

async function getPaySlipById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await PaySlip.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getPaySlipByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await PaySlip.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllPaySlips() {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await PaySlip.find();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getPaySlipById,
    getPaySlipByQuery,
    getAllPaySlips
}


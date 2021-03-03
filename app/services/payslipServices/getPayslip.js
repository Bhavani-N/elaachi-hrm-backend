const { PaySlip } = require('../../database');

async function getPaySlipById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await PaySlip.findById(id).populate('staffId').exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getPaySlipByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await PaySlip.findOne(query).populate('staffId').exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllPaySlips(page = 1) {
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    return new Promise(async(resolve, reject) => {
        try {
            let data = await PaySlip.find({})
            .populate('staffId')
            .sort({ _id: -1 }) 
            .skip(skip)
            .limit(pageSize);
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


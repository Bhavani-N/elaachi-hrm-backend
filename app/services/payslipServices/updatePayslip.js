const { PaySlip } = require('../../database');

async function updatePaySlip(id, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let result = await PaySlip.findOneAndUpdate({_id: id}, data, { new: true })
            .populate('staffId')
            .exec();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    updatePaySlip
}
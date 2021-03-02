const { PaySlip } = require('./../../database')

async function createPaySlip(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const result = new PaySlip(data);
            const paySlipData = await result.save();
            resolve(paySlipData)
        }catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createPaySlip
}
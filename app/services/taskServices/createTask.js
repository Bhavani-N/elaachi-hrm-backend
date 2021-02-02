const { Task } = require('../../database');

async function createTask(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const taskDetails = new Task(data);
            const result = await taskDetails.save();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createTask
}
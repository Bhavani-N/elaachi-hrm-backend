const { Task } = require('../../database');

async function createTask(data) {
    return new Promise(async(resolve, reject) => {
        try {
            const taskDetails = new Task.Task(data);
            const result = await result.save();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createTask
}
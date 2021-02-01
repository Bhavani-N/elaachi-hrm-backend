const { Task } = require('../../database');

async function updateTask(id, data) {
  return new Promise(async(resolve, reject) => {
      try {
          let result = await Task.Task.findOneAndUpdate({_id: id}, data, { new: true }).exec();
          resolve(result)
      } catch (error) {
          reject(error)
      }
  })
}

module.exports = {
  updateTask
}
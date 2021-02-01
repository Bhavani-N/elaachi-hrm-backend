const { Task } = require('../../database');

async function getTaskById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Task.Task.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getAllTasks() {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Task.Task.find();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

module.exports = {
  getTaskById,
  getAllTasks
}
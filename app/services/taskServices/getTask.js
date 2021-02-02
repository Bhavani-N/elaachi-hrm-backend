const { Task } = require('../../database');

async function getTaskById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Task.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getTaskByQuery(query) {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Task.findOne(query).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getAllTasks() {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Task.find();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

module.exports = {
  getTaskById,
  getTaskByQuery,
  getAllTasks
}
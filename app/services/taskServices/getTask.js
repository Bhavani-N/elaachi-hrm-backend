const { Task } = require('../../database');

async function getTaskById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Task.findById(id).populate('project').exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getTaskByQuery(query) {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Task.find(query).populate('project').exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getAllTasks(page=1) {

  const pageSize = 10;
  const skip = (page - 1) * pageSize; 
  return new Promise(async(resolve, reject) => {
        try {
            let data = await Task.find({})
            .sort({ _id: -1 }) 
            .skip(skip)
            .limit(pageSize)
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
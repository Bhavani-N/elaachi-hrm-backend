const { Project } = require('../../database');

async function getProjectById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Project.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getProjectByQuery(query) {
  return new Promise(async(resolve, reject) => {
      try {
          let data = await Project.findOne(query).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getAllProjects(page = 1) {
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    return new Promise(async(resolve, reject) => {
        try {
            let data = await Project.find({})
            .sort({ _id: -1 }) 
            .skip(skip)
            .limit(pageSize) // 'page size'
            resolve(data)
        } catch (error) { 
            reject(error)
        }
    })
}

module.exports = {
  getProjectById,
  getProjectByQuery,
  getAllProjects
}
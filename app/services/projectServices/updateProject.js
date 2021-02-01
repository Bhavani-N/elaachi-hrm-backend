const { Project } = require('../../database');

async function updateProject(id, data) {
  return new Promise(async(resolve, reject) => {
      try {
          let result = await Project.findOneAndUpdate({_id: id}, data, { new: true }).exec();
          resolve(result)
      } catch (error) {
          reject(error)
      }
  })
}

module.exports = {
  updateProject
}
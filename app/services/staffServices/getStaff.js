const Staff = require('../../database');

async function getStaff(page = 1) {
  const pageSize = 10;
  const skip = (page - 1) * pageSize; 
  return new Promise(async(resolve, reject) => {
      try {
        let result = await  Staff.Staff.find({})
          .sort({ _id: -1 }) 
          .skip(skip)
          .limit(pageSize) // 'page size'
          .populate('companyId')
          .exec();
        resolve(result)
      } catch (error) {
          reject(error)
      }
  })
}

async function getStaffById(id) {
  return new Promise(async(resolve, reject)=> {
      try {
          let data = await Staff.Staff.findById(id).exec();
          resolve(data)
      } catch (error) {
          reject(error)
      }
  })
}

async function getStaffWithPassword(query) {
  return new Promise(async(resolve, reject) => {
    try {
      let result = await Staff.Staff.find(query).exec();
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

async function getStaffBySearch(query) {
  return new Promise(async(resolve, reject) => {
    try {
      let result = await Staff.Staff.find({
        firstName: {
          $regex: new RegExp(query)
        }
      }, {
        _id: 0,
        _v: 0
      })
      .limit(10)
      .exec();
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}


module.exports = {
  getStaff,
  getStaffById,
  getStaffWithPassword,
  getStaffBySearch
}
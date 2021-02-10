const { Attendance } = require('../../database');

async function getAttendanceById(id) {
    return new Promise(async(resolve, reject)=> {
        try {
            let data = await Attendance.findById(id).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAttendanceByQuery(query) {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await Attendance.findOne(query).exec();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

async function getAllAttendance() {
    return new Promise(async(resolve, reject) => {
        try {
            let data = await Attendance.find();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getAttendanceById,
    getAttendanceByQuery,
    getAllAttendance
}


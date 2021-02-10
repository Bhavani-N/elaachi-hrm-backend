const { getAllUserLeaves, getUserLeaveById } = require('../../services/userLeavesServices/getUserLeave');

async function getAllUserLeave(req, res, next) {
    try {
        const result = await getAllUserLeaves();
        res.json({ status: 200, message: 'User Leave details', result: result.length, data: result })
    } catch (error) {
        next(error);
    }
}

async function getUserLeavesByID(req, res, next) {
    try {
        const result = await getUserLeaveById(req.params.id);
        res.json({ status: 200, message: 'User Leave details fetched', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUserLeave,
    getUserLeavesByID
}
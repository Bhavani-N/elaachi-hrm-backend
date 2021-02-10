const { updateUserLeave } = require('../../services/userLeavesServices');

async function updateUserLeaves(req, res, next) {
    try {
        let userLeaveId = req.params.id;
        let userLeaveData = req.body;
        const result = await updateUserLeave (userLeaveId, userLeaveData);
        res.json({ status: 200, message: 'User Leave updated successfully', result: result })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    updateUserLeaves
}
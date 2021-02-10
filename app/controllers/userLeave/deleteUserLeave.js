const { deleteById } = require('../../services/userLeavesServices/deleteUserLeave');

async function deleteUserLeaves(req, res, next) {
    try {
        let userLeaveId = req.params.id;
        const result = await deleteById(userLeaveId);
        res.json({ status: 200, message: 'User Leave deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteUserLeaves
}
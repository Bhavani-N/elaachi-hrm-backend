const { deleteById } = require('../../services/projectServices');

async function deleteProjects(req, res, next) {
    try {
        let projectId = req.params.id;
        const result = await deleteById(projectId);
        res.json({ status: 200, message: 'Project deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteProjects
}
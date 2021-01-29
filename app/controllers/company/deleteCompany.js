const { deleteById } = require('../../services/companyServices/deleteCompany');

async function deleteCompanies(req, res, next) {
    try {
        let companyId = req.params.id;
        const result = await deleteById(companyId);
        res.json({ status: 200, message: 'Company deleted successfully',
          result: result
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    deleteCompanies
}
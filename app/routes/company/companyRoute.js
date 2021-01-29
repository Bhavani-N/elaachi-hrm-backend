const router = require('express').Router();
const companyController = require('../../controllers/company');

router.route('/')
    .post(companyController.createCompanies)
    .get(companyController.getAllCompany)

router.route('/:id')
    .get(companyController.getCompanies)
    .put(companyController.updateCompanies)
    .delete(companyController.deleteCompanies);

module.exports = router;
const router = require('express').Router();
const companyController = require('../../controllers/company');

const { AuthServ } = require("../../utils/auth");

router.route('/')
    .post(AuthServ.authorize(), companyController.createCompanies)
    .get(AuthServ.authorize(), companyController.getAllCompany)

router.route('/:id')
    .get(AuthServ.authorize(), companyController.getCompanies)
    .put(AuthServ.authorize(), companyController.updateCompanies)
    .delete(AuthServ.authorize(), companyController.deleteCompanies);

module.exports = router;
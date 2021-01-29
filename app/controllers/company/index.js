const { createCompanies } = require('./createCompany');
const {deleteCompanies} = require('./deleteCompany');
const { getAllCompany } = require('./getAllCompany');
const { getCompanies }= require('./getCompany');
const { updateCompanies } = require('./updateCompany')

module.exports = {
    createCompanies,
    deleteCompanies,
    getAllCompany,
    getCompanies,
    updateCompanies 
}
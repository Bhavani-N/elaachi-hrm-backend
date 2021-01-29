const { createCompany } = require('./createCompany');
const { deleteCompany } = require('./deleteCompany');
const { getCompany } = require('./getCompany');
const { updateCompany } = require('./updateCompany');

module.exports = {
    createCompany,
    deleteCompany,
    getCompany,
    updateCompany
}
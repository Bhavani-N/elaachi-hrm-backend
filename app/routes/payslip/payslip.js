const express = require('express');
const router = express.Router();

const { createPayslip,
    getPayslip,
    updatePayslip,
    deletePayslip } = require('../../controllers/payslip');

const { uploadSingleFile } = require('../../controllers/upload');

const { AuthServ } = require("../../utils/auth");

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `HRM_${file.originalname}`)
    }
}) 

var upload = multer({ storage: storage })

router
    .route('/')
    .post(AuthServ.authorize(), createPayslip.createPaySlips)
    .get(AuthServ.authorize(), getPayslip.getAllPayslip);

router.route('/file').post(upload.single('file'), (req, res, next) => {
    const file = req.file
    console.log(file.filename);
    if(!file){
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

router.route('/list').get(AuthServ.authorize(), getPayslip.getPayslipsByQuery);

router
    .route('/:id')
    .get(AuthServ.authorize(), getPayslip.getPayslipsByID)
    .put(AuthServ.authorize(), updatePayslip.updatePaySlips)
    .delete(AuthServ.authorize(), deletePayslip.deletePaySlips)

module.exports = router;
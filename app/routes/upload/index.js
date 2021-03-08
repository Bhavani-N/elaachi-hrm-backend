const express = require('express');
const multer = require('multer');

const router = express.Router();
const UploadController = require('../../controllers/upload');

const upload = multer({ dest: 'uploads/' });

router.post('/addPdfFile', upload.single('file'), UploadController.addPdfFile);

module.exports = router;


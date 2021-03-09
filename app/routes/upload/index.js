const express = require('express');
const multer = require('multer');

const router = express.Router();
const UploadController = require('../../controllers/upload');

const upload = require('../../../config/multer.config');

router.post('/upload', upload.single('file'), UploadController.doUpload);

router.get('/all', UploadController.listKeyNames);

router.get('/:filename', UploadController.doDownload);

module.exports = router;


// async function uploadSingleFile(req, res, next) {
//     try {
//         const file = req.file;
//         console.log(file.filename);
//         if(!file) {
//             const error = new Error('No file')
//             error.httpStatusCode = 400
//             return next(error)
//         }
//         res.send(file);
//     } catch (error) {    
//         next(error);
//     }
// }   

// module.exports = {
//     uploadSingleFile
// }

const AWS = require('aws-sdk');
const fs = require('fs');

const awsconfig = require('../../../config/aws-config');

AWS.config.update(awsconfig);
const s3 = new AWS.S3({ params: { Bucket: process.env.S3_BUCKET } });

const UploadController = {};

UploadController.addPdfFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send({ MESSAGE: 'NO_FILE', STATUS: 400 });
    }
    console.log('........', req.file.path);
    const Path = req.file.path;
    fs.readFile(Path, (err, data) => {
        if (!err) {
          const key = `${Math.floor(Math.random() * 1000000000)}/${new Date().valueOf()}/${req.file.originalname}`;
          const params = { Key: key, Body: data };
          s3.upload(params)
            .on('httpUploadProgress', (file) => {
              console.log(
                `Uploaded :: ${parseInt((file.loaded * 100) / file.total)}%`,
              );
            })
            .send((err, data) => {
              console.log(data, 'pdf||....');
              if (err) {
                res.json('Error');
              } else {
                fs.unlink(Path, (err) => {
                  if (err) throw err;
                  console.log('successfully deleted pdf File');
                });
                res.status(200).json({
                  MESSAGE: 'FILE_UPLOADED',
                  STATUS: 200,
                  DATA: {
                    key,
                    data,
                  },
                });
              }
            });
        } else {
          res.status(500).json({
            MESSAGE: 'INTERNAL_ERROR',
            STATUS: 500,
          });
        }
    });
    return '';
};
    
module.exports = UploadController;

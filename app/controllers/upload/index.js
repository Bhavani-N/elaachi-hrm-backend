const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = require('../../../config/aws-config');

exports.doUpload = (req, res) => {
	const params = {
		Bucket: process.env.S3_BUCKET,
		Key: req.file.originalname,
		Body: req.file.buffer
	}
	s3.upload(params, (err, data) => {
    console.log('file upload')
		if (err) {
      console.log(err)
			res.status(500).send("Error -> " + err);
		}
    console.log('success')
		res.send("File uploaded successfully! -> keyname = " + req.file.originalname);
	});
}

exports.listKeyNames = (req, res) => {
	const params = {
		Bucket: process.env.S3_BUCKET,
	}

	var keys = [];
	s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
      res.send("error -> "+ err);
    } else {
        var contents = data.Contents;
        contents.forEach(function (content) {
            keys.push(content.Key);
        });
        res.send(keys);
    }
	});
}

exports.doDownload = (req, res) => {
	const params = {
		Bucket: process.env.S3_BUCKET,
		Key: req.params.filename
	}

	res.setHeader('Content-Disposition', 'attachment');

	s3.getObject(params)
		.createReadStream()
			.on('error', function(err){
				res.status(500).json({error:"Error -> " + err});
		}).pipe(res);
}


// AWS.config.update(awsconfig);
// const s3 = new AWS.S3({ params: { Bucket: process.env.S3_BUCKET } });

// const UploadController = {};

// UploadController.addPdfFile = (req, res) => {
//     if (!req.file) {
//         return res.status(400).send({ MESSAGE: 'NO_FILE', STATUS: 400 });
//     }
//     console.log('........', req.file.path);
//     const Path = req.file.path;
//     fs.readFile(Path, (err, data) => {
//         if (!err) {
//           const key = `${Math.floor(Math.random() * 1000000000)}/${new Date().valueOf()}/${req.file.originalname}`;
//           const params = { Key: key, Body: data };
//           s3.upload(params)
//             .on('httpUploadProgress', (file) => {
//               console.log(
//                 `Uploaded :: ${parseInt((file.loaded * 100) / file.total)}%`,
//               );
//             })
//             .send((err, data) => {
//               console.log(data, 'pdf||....');
//               if (err) {
//                 res.json('Error');
//               } else {
//                 fs.unlink(Path, (err) => {
//                   if (err) throw err;
//                   console.log('successfully deleted pdf File');
//                 });
//                 res.status(200).json({
//                   MESSAGE: 'FILE_UPLOADED',
//                   STATUS: 200,
//                   DATA: {
//                     key,
//                     data,
//                   },
//                 });
//               }
//             });
//         } else {
//           res.status(500).json({
//             MESSAGE: 'INTERNAL_ERROR',
//             STATUS: 500,
//           });
//         }
//     });
//     return '';
// };
    
// module.exports = UploadController;


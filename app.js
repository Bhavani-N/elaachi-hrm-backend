require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const config = require('./config/index');

const AppError = require('./app/utils/appError');
const globalErrorHandler = require('./app/controllers/errorController');


const DB = process.env.MONGO_DB_URI.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('DB connection successful!');
    } ,error => {
        console.error('DB failed', + error.message);
    });

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: '7mb' }));
app.use(bodyParser.json({ limit: '7mb', extended: true }));

require('./app/routes')(app);

app.use(globalErrorHandler);

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

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file
    console.log(file.filename);
    if(!file){
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})


const onServerStart = () => {
    const ENVIRONMENT = process.env.NODE_ENV || 'development';
    const message = `Server Listening On Port, ${PORT}, ENVIRONMENT=${ENVIRONMENT}`;
    // connectionDb();
    console.log(message);
};

server.listen(PORT, onServerStart);
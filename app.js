require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
// const sgMail = require('@sendgrid/mail')

const app = express();
const server = require('http').createServer(app);
const config = require('./config/index');

const AppError = require('./app/utils/appError');
const globalErrorHandler = require('./app/controllers/errorController');

// const { connectionDb } = require('./app/database/db');

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

// const API_KEY = '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';

// sgMail.setApiKey(API_KEY)

// const message = {
//     to: 'anubhavani5@gmail.com',
//     from: {
//         name: 'Elaachi HRM',
//         email: 'bhavani@itprofound.com'
//     },
//     subject: 'Hello from sendgrid',
//     text: 'Hello from sendgrid',
//     html: '<h1>Hello from sendgrid</h1>'
// };

// sgMail
//     .send(message)
//     .then((response) => console.log('Email Sent...'))
//     .catch((error) => console.log(error.message));

const onServerStart = () => {
    const ENVIROINMENT = process.env.NODE_ENV || 'development';
    const message = `Server Listening On Port, ${PORT}, ENVIROINMENT=${ENVIROINMENT}`;
    // connectionDb();
    console.log(message);
};

server.listen(PORT, onServerStart);
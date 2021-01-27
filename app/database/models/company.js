const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    location: {
        city: { type: String },
        pinCode: { type: Number},
        State: { type: String },
        Address: { type: String },
        email: { type: String, unique: true }
    },
    contact: {
        emails: { type: Array },
        phone: [{
            type: Array
        }]
    },
    

})
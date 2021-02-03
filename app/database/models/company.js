const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    location: {
        city: { type: String },
        pinCode: { type: Number },
        State: { type: String },
        Address: { type: String },
        email: { type: String, unique: true }
    },
    contact: {
        phone: [
            {
                typeOf: { type: String },
                countryCode: { type: Number },
                mobile: { type: Number }
            }
        ],
        emails: [{
            email: { type: String },
            typeOfEmail: { type: String }
        }]
    },
    officeHours: {
        monday: {
            from: { type: String },
            to: { type: String }
        },
        tuesday: {
            from: { type: String },
            to: { type: String }
        },
        wednesday: {
            from: { type: String },
            to: { type: String }
        },
        thursday: {
            from: { type: String },
            to: { type: String }
        },
        friday: {
            from: { type: String },
            to: { type: String }
        },
        saturday: {
            from: { type: String },
            to: { type: String }
        },
        sunday: {
            from: { type: String },
            to: { type: String }
        }
    },
    imageLogo: {
        name: { type: String },
        file: { type: String }
    }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
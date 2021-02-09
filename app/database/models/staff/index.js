const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Company = require('../company');

const { Schema } = mongoose;

const options = {
    timestamps: true
};

const passwordResetSchema = new Schema({
  status: { type: String, enum: ['raised', 'resolved']}
})

const loginActivitySchema = new Schema({
  status: String,
  loggingTime: Date,
  loginIp: { type: String, default: '' },
  platform: {
      type: String,
      enum: ["Web", "Android", "Tablet"],
      default: "Web"
  },
})

const staffSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: {
    countryCode: { type: Number },
    mobile: { type: Number },
  },
  username: {
    type: String,
  },
  gender: { type: String, enum: ['male', 'female', 'others'] },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: { type: String },
  otp: String,
  isEmailVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true, select: false },
  isDelete: { type: Boolean, default: false },
  loginActivity: [loginActivitySchema],
  passwordReset: [passwordResetSchema],
  role: { type: String, enum: ['admin', 'HR', 'Employee'], default: 'Employee' },
  profileImage: { type: String, default: 'default.jpg' },
  contact: { type: Number },
  languages: { type: String },
  skills: { type: String },
  socialMedia: [
    {
      typeOfMedia: { type: String },
      link: {type: String }
    }
  ],
  workstation: { type: String },
  companyId:  [
    {
        type: mongoose.Schema.ObjectId,
        ref: 'Company'
    }
  ],
  access: {
    type: String,
    enum: ['Full-Access', 'Partial-Access'],
  },
}, options);         

staffSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12)
  next();
});


const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
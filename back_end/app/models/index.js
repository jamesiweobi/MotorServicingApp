const mongoose = require('mongoose');
const { Schema } = mongoose;

const newUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 250,
  },
  lastName: {
    type: String,
    required: true,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MotorServicingAppUsers', newUserSchema);

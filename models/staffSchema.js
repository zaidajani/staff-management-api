const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const staffShema = new mongoose.Schema({
  GenId: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  DateOfJoining: {
    type: new Date,
    required: true
  },
});

function validateStaffShema(staff) {
  const schema = {
    GenId: Joi.string().required(),
    Address: Joi.string().required(),
    Name: Joi.string().required(),
    DateOfJoining: Joi.date().required()
  }

  return Joi.validate(staff, schema);
}

exports.Schema = staffShema;
exports.validateStaffShema = validateStaffShema;
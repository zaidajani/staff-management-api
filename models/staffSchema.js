const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const staffSchema = new mongoose.Schema({
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
    type: String,
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

const StaffDb = mongoose.model('staffs', staffSchema);

exports.StaffDb = StaffDb;
exports.schema = staffSchema;
exports.validateStaffShema = validateStaffShema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  adminId: {
    type: String,
    required: true,
  }
 
});

module.exports = mongoose.model("Hospital", HospitalSchema);
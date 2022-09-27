const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Patient = new Schema({
  patient_name: {
    type: String,
    required: true
  },
  patient_email: {
    type: String,
    required: true,
    unique:true
  },
  patient_phonenumber: {
    type: String,  
    required: true,
    unique:true
  },
  patient_password: {
    type: String,
    required: true
  },
  patient_gender : {
    type: String,
    required: true,
  },
  patient_bloodgroup: {
    type: String,  
    required: true,
  },
  role: {
    type: String,
    default: "patient",
  }

});

module.exports = mongoose.model("patients", Patient);
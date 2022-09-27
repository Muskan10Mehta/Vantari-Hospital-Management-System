const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Doctor = new Schema({
  doctor_name: {
    type: String,
    required: true
  },
  doctor_email: {
    type: String,
    required: true,
    unique: true,
  },
  doctor_phonenumber: {
    type: String,  
    required: true,
    unique: true,
  },
  doctor_password: {
    type: String,
    required: true
  },
  doctor_speciality : {
    type: Array,
    required: true,
  },
  doctor_qualification: {
    type: Array,  
    required: true,
  },
  doctor_experience: {
    type: String,  
    required: true,
  },
  doctor_consulting_language: {
    type: Array,  
    required: true,
  },
  doctor_photo:{
    type:String,
    default: " "
  },
  doctor_speacialized_treatments: {
    type: Array,  
    required: true,
  },
  doctor_hospital_ids: {
    type: Array,  
    required: true,
  },
  role: {
    type: String,
    default: "doctor",
  }

});

module.exports = mongoose.model("doctors", Doctor);
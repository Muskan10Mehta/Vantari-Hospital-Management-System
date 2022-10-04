const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DoctorSchema = new Schema({
  user_id : {
    type: String,
    required: true,
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
  
});

module.exports = mongoose.model("Doctor", DoctorSchema);
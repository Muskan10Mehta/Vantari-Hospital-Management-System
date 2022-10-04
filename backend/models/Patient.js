const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  patient_age: {
    type: String,
    required: false,
  },
  patient_bloodgroup: {
    type: String,
    required: false,
  },
  patient_weight: {
    type: String,
    required: false,
  },
  patient_height: {
    type: String,
    required: false,
  },
  patient_documents:{
    type: Array,
    required: false,
  },
  user_id:{
    type: String,
    required : true,
  }
 
});

module.exports = mongoose.model("Patient", PatientSchema);
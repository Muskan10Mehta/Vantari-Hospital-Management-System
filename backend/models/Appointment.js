const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AppointmentSchema = new Schema({
  appointment_date: {
    type: Date,
    required: true
  },
  appointment_time: {
    type: String,
    required: true
  },
  appointment_description: {
    type: String,
    required: true
  },
  patient_id: {
    type: String,
    required: true
  },
  doctor_id : {
    type: String,
    required: true,
  },
  status : {
    type: Boolean, 
    default: false,
  }
  
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
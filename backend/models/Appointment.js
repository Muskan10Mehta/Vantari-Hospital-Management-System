const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Appointment = new Schema({
  appointment_start_time: {
    type: date,
    required: true
  },
  appointment_end_time: {
    type: date,
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
  
});

module.exports = mongoose.model("appointments", Appointment);
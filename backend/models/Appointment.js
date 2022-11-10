const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AppointmentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  patientId: {
    type: String,
    required: true
  },
  doctorId : {
    type: String,
    required: true,
  },
  status : {
    type: String, 
    default: "PENDING", //pending, cancelled, done
  }
  
});

AppointmentSchema.index({date : 1, time : 1, doctorId: 1}, {unique : true, dropDups: true});

module.exports = mongoose.model("Appointment", AppointmentSchema);
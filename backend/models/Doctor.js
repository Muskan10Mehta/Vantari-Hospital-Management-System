const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DoctorSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }, 
  qualification: {
    type: Array,
    required: true,
  },
  speciality: {
    type: Array,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  consultingLanguages: {
    type: Array,
    required: true,
  },
  photo: {
    type: String,
    default: " ",
  },
  specializedTreatments: {
    type: Array,
    required: true,
  },
  startTime : {
    type: String,
    default: "09:00",
  }, 
  endTime : {
    type: String, 
    default : "19:00",
  }, 
  breakStart : {
    type: String, 
    default : "13:00"
  },
  breakEnd : {
    type: String, 
    default : "14:00"
  },
  hospitalName: {
    type: String,
    default: " ",
  },
  hospitalId: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema);

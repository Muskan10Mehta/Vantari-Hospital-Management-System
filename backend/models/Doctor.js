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
  hospitalId: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema);

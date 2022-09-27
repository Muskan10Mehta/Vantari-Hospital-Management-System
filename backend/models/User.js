const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  }, 
  role: {
    type: String,
    default: "admin",
  }
});

module.exports = mongoose.model("users", User);
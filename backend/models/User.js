const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true, 
    unique: true,
  }, 
  role: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("User", UserSchema);
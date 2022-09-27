const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Hospital = new Schema({
  hospital_name: {
    type: String,
    required: true
  },
  hospital_address: {
    type: String,
    required: true
  },
  hospital_phone_number: {
    type: String,
    required: true
  },
  org_id: {
    type: String,
    required: true
  },
 
});

module.exports = mongoose.model("hospitals", Hospital);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Organization = new Schema({
  org_name: {
    type: String,
    required: true
  },
  org_email: {
    type: String,
    required: true
  },
  org_password: {
    type: String,
    required: true
  },
  org_phone_number: {
    type: String,
    required: true
  },
  hospital_id: {
    type:String, 
    required:true
  },
  admin_id:{
    type:string,
    required: true,
  },
  role: {
    type: String,
    default: "organization",
  }
  
});

module.exports = mongoose.model("organizations", Organization);
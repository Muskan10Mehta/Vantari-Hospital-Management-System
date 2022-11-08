const router = require("express").Router();
const Doctor = require("../models/Doctor");

// create new doctor profile
router.post("/addProfile", async (req, res) => {
    console.log("Sending the response of the post request");
  
    try {
      const newDoctor = new Doctor(req.body);
      const doctor = await newDoctor.save();
      res.status(200).send(doctor);
    } catch (err) {
      res.status(400).send(err);
    }
});

// get doctor profile by doctors user id
router.get("/getDoctor/:id", async (req, res) => {

  try {
    const doctor = await Doctor.find({"userId": req.params.id});
    const result = doctor.id? doctor : false;
    console.log("Sending get request data");
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get all doctors
router.get("/getAllDoctors", async (req, res) => {
  try{
    const doctors = await Doctor.find();
    res.status(200).send(doctors);
  } catch (err){
    res.status(400).send(err);
  }
});

module.exports = router;
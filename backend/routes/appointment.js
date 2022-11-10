const router = require("express").Router();
const bcrypt = require("bcrypt");
const Appointment = require("./../models/Appointment");
const { route } = require("./auth");

router.post("/create", async (req, res) => {
  console.log("Sending the response of the post request");

  try {
    
    const newAppointment = new Appointment(req.body);

    const appointment = await newAppointment.save();
    res.status(200).send(appointment);
  } catch (err) {
    res.status(400).send(err);
  }
});



router.get("/allappointments", async(req,res) => {


});

router.delete("/delete", async(req,res) => {


});

module.exports = router;
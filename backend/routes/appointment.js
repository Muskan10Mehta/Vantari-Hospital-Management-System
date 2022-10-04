const router = require("express").Router();
const bcrypt = require("bcrypt");
const Appointment = require("./../models/Appointment");

router.post("/create", async (req, res) => {
  console.log("Sending the response of the post request");

  try {
    
    const newAppointment = new Appointment({
      appointment_date: req.body.appointment_date,
      appointment_time: req.body.appointment_time,
      appointment_description: req.body.appointment_description,
      patient_id: req.body.patient_id,
      doctor_id: req.body.doctor_id,
    });

    const appointment = await newAppointment.save();
    res.status(200).send(appointment);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
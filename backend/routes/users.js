const router = require("express").Router();
const User = require("../models/User");
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

router.get("/getUser/:id", async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    console.log("Sending get request data");
    res.status(200).send(user);
  } catch(err) {
    res.status(400).send(err);
  }
})

router.get("/getUsers/:id", async (req, res) => {

    try {
      const users = await User.find({"supervisor" : req.params.id});
      console.log("Sending get request data");
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send(err);
    }
});

module.exports = router;
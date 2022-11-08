const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("./../models/User");

router.post("/signup", async (req, res) => {
  console.log("Sending the response of the post request");

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const supervisor = req.body.supervisor ? true : false;

    console.log( supervisor);

    if (supervisor) {
      console.log(supervisor);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
        phone_number: req.body.phone_number,
        role: req.body.role,
        supervisor: req.body.supervisor,
      });
      const user = await newUser.save();
      res.status(200).send(user);

    } else {
      console.log( supervisor);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
        phone_number: req.body.phone_number,
        role: req.body.role,
        //supervisor: req.body.supervisor,
      });
      const user = await newUser.save();
      res.status(200).send(user);
    }
       
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("Sending the response of the post request");

  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(400).json("Wrong credential");
    }
    const validate = await bcrypt.compare(req.body.password, user.password);

    if (!validate) {
      res.status(400).json("Wrong credential");
    }
    const { password, email, phone_number, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

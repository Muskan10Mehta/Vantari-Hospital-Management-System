const router = require("express").Router();
const Hospital = require("../models/Hospital");

router.post("/addnew", async (req, res) => {
  console.log("Sending the response of the post request");

  try {
    const newHospital = new Hospital({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      orgId: req.body.orgId,
      adminId: req.body.adminId,
    });

    const hospital = await newHospital.save();
    res.status(200).send(hospital);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/getHospital/:id", async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    console.log("Sending get request data");
    res.status(200).send(hospital);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/getHospitals/", async (req, res) => {
  const orgId = req.query.orgId;
  const adminId = req.query.adminId;

  if (adminId) {
    try {
      const hospitals = await Hospital.find({ adminId: adminId });
      console.log("Sending get request data");
      res.status(200).send(hospitals);
    } catch (err) {
      res.status(400).send(err);
    }
  } else if (orgId) {
    try {
      const hospitals = await Hospital.find({ orgId: orgId });
      console.log("Sending get request data");
      res.status(200).send(hospitals);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

module.exports = router;

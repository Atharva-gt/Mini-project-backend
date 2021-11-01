const Model = require("../models/userModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);

  new Model(data)
    .save()
    .then(() => {
      console.log("data saved");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((data) => {
      console.log("data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

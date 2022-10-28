const express = require("express");
var fs = require("fs");
var path = require("path");
const Model = require("../models/model");
require("dotenv").config();

const router = express.Router();

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public" + "/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpeg");
  },
});

var upload = multer({ storage: storage });

router.get("/admin", (req, res) => {
  if (req.session.user) {
    Model.find({}, (err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred", err);
      } else {
        res.render("home", { items: items, user: req.session.user });
      }
    });
  } else {
    res.render("login", { error: "Please login before" });
  }
});

const tophidden = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

router.get("/login", (req, res) => {
  res.render("login", { error: null });
});

router.post("/login", (req, res) => {
  if (
    req.body.email == tophidden.email &&
    req.body.password == tophidden.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/api/admin");
  } else {
    res.render("login", { error: "Bad password or Email" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      res.render("login", { error: "you are logout" });
    }
  });
});

router.post("/post", upload.single("image"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    type: req.body.type,
    img: {
      data: path.join(
        req.protocol + "://" + req.get("host") + "/img/" + req.file.filename
      ),
      contentType: "image/jpg",
    },
  };
  Model.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/api/admin");
    }
  });
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/drawing", async (req, res) => {
  try {
    const data = await Model.find({ type: "Drawing" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/engraving", async (req, res) => {
  try {
    const data = await Model.find({ type: "Engraving" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/painting", async (req, res) => {
  try {
    const data = await Model.find({ type: "Painting" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/photography", async (req, res) => {
  try {
    const data = await Model.find({ type: "Photography" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/event", async (req, res) => {
  try {
    const data = await Model.find({ type: "Event" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.post("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    await Model.findByIdAndUpdate(id, updatedData, options);

    res.redirect("/api/admin");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.get("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.redirect("/api/admin");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
var fs = require("fs");
var path = require("path");
const Model = require("../models/model");

const router = express.Router();

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/" + __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.get("/admin", (req, res) => {
  Model.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("home", { items: items });
    }
  });
});

router.post("/post", upload.single("image"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    type: req.body.type,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
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

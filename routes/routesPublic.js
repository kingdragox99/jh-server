const express = require("express");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  message: "DDOS protect, to many try your ip is temporary ban",
  standardHeaders: true,
  legacyHeaders: false,
});

const router = express.Router();

router.get("/", limiter, (req, res) => {
  res.sendFile(process.cwd() + "/public" + "/index.html");
});

module.exports = router;

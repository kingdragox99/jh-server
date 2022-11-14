const express = require("express");
const rateLimit = require("express-rate-limit");
const nodeMailer = require("nodemailer");
require("dotenv").config();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  message: "DDOS protect, to many try your ip is temporary ban",
  standardHeaders: true,
  legacyHeaders: false,
});

async function mainMail(name, email, message) {
  const transporter = await nodeMailer.createTransport({
    secure: false,
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL_RECEVER,
    subject: "JoyceHuberty.com demande de contacte de " + email,
    html: `<h1>Vous avez un message sur JoyceHuberty.com</h1>
    <h2>Email:</h2><h3>${email}</h3>
    <h2>Name:</h2><h3>${name}</h3>
    <h2>Message:</h2><h3>${message}</h3>`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

const router = express.Router();

router.get("/", limiter, (req, res) => {
  res.sendFile(process.cwd() + "/public" + "/index.html");
});

router.post("/contact", limiter, async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  try {
    await mainMail(name, email, message);

    res.redirect("/contacte");
  } catch (error) {
    console.log(error);
    res.redirect("/contacte");
  }
});

module.exports = router;

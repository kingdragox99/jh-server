const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "mIa G0d 0G4rd",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

const routes = require("./routes/routes");

app.use("/api", routes);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.static("public"));
app.use("/img", express.static(__dirname + "/img"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});

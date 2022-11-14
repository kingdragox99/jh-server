const express = require("express");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const routesApi = require("./routes/routesApi");
const routersPublic = require("./routes/routesPublic");
var history = require("connect-history-api-fallback");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

app.use("/api", routesApi);
app.use("/", routersPublic);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(history());

app.use(express.static("public"));
app.use("/img", express.static(__dirname + "/img"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);


dotenv.config();
loginCheck(passport);

// Mongo DB conncetion
mongoose
  .connect("mongodb://127.0.0.1:27017/Login-Registration", { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

  // set view engine
app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
  

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", require("./routes/login.js"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));

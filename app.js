//var mongodb = require("mongodb");
var mongoose = require("mongoose");
var path = require('path');
var controller = require("./src/controller");
var express = require("express");
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://tokimatu:short-url@ds113000.mlab.com:13000/tokimatu_short-url");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
    //res.render("index.html")
});

controller(app);


app.use(function (req, res, next) {
  res.status(404).send("Page not found!");
});

app.listen((process.env.PORT || 3000), () => {
    console.log("Server up");
});
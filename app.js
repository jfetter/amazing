"use strict";

var PORT = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/amazing");

app.set("view engine", "jade");

require('dotenv').load();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded ({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));


//ROUTES
app.get("/", function(req,res){
	res.render("index");
})
app.use("/auth", require("./routes/auth"))

app.listen(PORT, function(){console.log("Listening on port", PORT); });


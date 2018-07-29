var express = require("express");
var app = new express();

const add = require("./services/add.js");
const divide = require("./services/divide.js");
const multiply = require("./services/multiply.js");
const subtract = require("./services/subtract.js");

app.get("/add", (req, res) => {
	var a = parseFloat(req.query.a);
	var b = parseFloat(req.query.b);
	
	res.send(add(a, b));
});

app.get("/divide", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.send(divide(a, b));
});

app.get("/multiply", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.send(multiply(a, b));
});

app.get("/subtract", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.send(subtract(a, b));
});

app.listen(3000);
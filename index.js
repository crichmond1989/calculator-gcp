var express = require("express");
var app = new express();

const add = require("./services/add.js");
const divide = require("./services/divide.js");
const multiply = require("./services/multiply.js");
const subtract = require("./services/subtract.js");

app.get("/add", (req, res) => {
	var a = parseFloat(req.query.a);
	var b = parseFloat(req.query.b);
	
	res.json(add(a, b));
});

app.get("/divide", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.json(divide(a, b));
});

app.get("/multiply", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.json(multiply(a, b));
});

app.get("/subtract", (req, res) => {
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);
	
	res.json(subtract(a, b));
});

app.listen(process.env.PORT || 3000);
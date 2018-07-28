var express = require("express");
var app = new express();

app.get("/add", (req, res) => {
	var a = parseFloat(req.query.a);
	var b = parseFloat(req.query.b);
	
	res.json({
		a,
		b,
		result: a + b
	});
});

app.listen(3000);
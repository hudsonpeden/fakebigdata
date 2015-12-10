var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongojs = require('mongojs');
var db = mongojs('fakebigdata', ['factorial', 'fibonacci', 'prime']);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//FACTORIAL
app.get('/factorial/:id', function (req, res) {

	var id = req.params.id;
	console.log("ID is: " + id);

	db.factorial.findOne({
		seriesNum: id
	}, function(err, doc){
		console.log("DOC is: " + doc.value);
		res.json(doc.value);
	});
});

//FIBONACCI
app.get('/fibonacci/:id', function (req, res) {

	var id = req.params.id;
	console.log("ID is: " + id);

	db.fibonacci.findOne({
		seriesNum: id
	}, function(err, doc){
		console.log("DOC is: " + doc.value);
		res.json(doc.value);
	});
});

//PRIME
app.get('/prime/:id', function (req, res) {

	var id = req.params.id;
	console.log("ID is: " + id);

	db.prime.findOne({
		seriesNum: id
	}, function(err, doc){
		console.log("DOC is: " + doc.value);
		res.json(doc.value);
	});
});



app.listen(8081);
console.log("Server running on port 8081");

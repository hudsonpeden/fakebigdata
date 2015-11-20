var express = require('express');
var app = express();
var mongojs = require('mongojs');
// var db = mongojs('test', ['factorialinsert', 'primeInsert', 'fibInsert']);
var db = mongojs('test', ['fibInsert']);
var bodyParser = require('body-parser');
var bigInt = require("big-integer");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//FACTORIAL
// app.get('/factorialinsert', function (req, res){
// 	console.log("I recieved a GET request");
// });
//
// app.get('/factorialinsert/:id', function (req, res) {
//
// 	var id = req.params.id;
// 	console.log("ID is: " + id);
//
// 	db.factorialinsert.findOne({
// 		seriesNum: id
// 	}, function(err, doc){
// 		console.log("DOC is: " + doc.value);
// 		res.json(doc.value);
// 	});
// });

//FIBONACCI
app.get('/fibInsert', function (req, res){
	console.log("I recieved a GET request");
});

app.get('/fibInsert/:id', function (req, res) {

	var id = req.params.id;
	console.log("ID is: " + id);

	db.fibInsert.findOne({
		seriesNum: id
	}, function(err, doc){
		console.log("DOC is: " + doc.value);
		res.json(doc.value);
	});
});

// //PRIME
// app.get('/primeInsert', function (req, res){
// 	console.log("I recieved a GET request");
// });
//
// app.get('/primeInsert/:id', function (req, res) {
//
// 	var id = req.params.id;
// 	console.log("ID is: " + id);
//
// 	db.primeInsert.findOne({
// 		seriesNum: id
// 	}, function(err, doc){
// 		console.log("DOC is: " + doc.value);
// 		res.json(doc.value);
// 	});
// });






app.listen(3000);
console.log("Server running on port 3000");

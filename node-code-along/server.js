var express = require('express');
var app = express();
var hobbies = ['sewing', 'reading', 'drinking beer', 'hiking'];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {name:"Katrina"});
});

app.get('/about-me', function (req, res) {
  res.render('about', {data: hobbies});
});

app.get('/howdy', function (req, res) {
  res.end('We made it here. Howdy!');
});

app.get('/cheer', function (req, res) {
  res.end('It is a wonderful evening');
});

app.get('/jeer', function (req, res) {
  res.end('It is not the best evening');
});



var server = app.listen(5000, function () {
  console.log('Server fired up on Port 5000');
});

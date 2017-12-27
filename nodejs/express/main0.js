//express nodejs的web应用框架，提供强大的特性与丰富的http工具
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081);
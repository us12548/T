
var express = require('express');
var app = express();
//nodejs同级目录下的public（public/images/cat.jpg）目录声明为一个静态文件目录，可以被访问
//不声明的话，从此端口进入的请求是不可以访问服务器的任何东西的
//访问地址http://127.0.0.1:8081/images/cat.jpg
app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081);
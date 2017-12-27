var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "get.html" );
   console.log(__dirname);
});
 
app.get('/process_get', function (req, res) {
   var response = {
       //get方法获取参数方式
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   res.end(JSON.stringify(response));
});
 
var server = app.listen(8081);
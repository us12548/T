//使用express构建web api
//决定让哪个方法去响应客户端请求的地址，这就是express的路由
var express = require('express');
//body-parser nodejs的中间件
var bodyParser=require('body-parser');

var fs = require('fs');
var app = express();
//解析post数据依赖这句代码
app.use(bodyParser.urlencoded({extended:true}));
app.get('/index.html', function (req, res) {
    //第一种使用的输出html文件办法，很笨拙
    //---------------------------------------------
    //基于visual studio code工作区的路径
    // var indexPath="nodejs/express/post.html";

    //  fs.readFile(indexPath, function (err, data) {
    //     if (err) {
    //         res.send('error');      
    //     }else{             
    //         res.send(data.toString());    
    //     }
    //  });
    //-----------------------------------------------
    //第二种输出html文件方式
    res.sendFile( __dirname + "/" + "post.html" );
    console.log(__dirname);
});

// app.get('/get.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "get.html" );
//     console.log(__dirname);
//  });
 
//  POST 请求
app.post('/', function (req, res) {
    //post方法获取参数的方式
   res.send('Hello '+req.body.name);
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
var server = app.listen(8081);
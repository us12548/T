var fs = require("fs");
//读取文件信息，文件不存在进入err块，类似于try catch块，输出错误信息。
//如果没有err捕捉异常，则运行时报错
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
 });
//跟之前的Stream操作不同，
var fs = require("fs");
//文件写入信息，文件不存在则自动创建
fs.writeFile('input.txt', 'hello world',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
 });
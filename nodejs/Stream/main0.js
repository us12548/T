//Stream事件，默认有事件 data,end,error,finish
//data - 当有数据可读时触发。数据读取在这里已经一次读取完了，不存在循环
//end - 没有更多的数据可读时触发。
//error - 在接收和写入过程中发生错误时触发。
//finish - 所有数据已被写入到底层系统时触发。

//输出示例
var fs = require("fs");
var dataInfo = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    console.log(chunk);
    console.log("-----------------------------------");
    dataInfo += chunk;
});

readerStream.on('end',function(){
   console.log(dataInfo);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
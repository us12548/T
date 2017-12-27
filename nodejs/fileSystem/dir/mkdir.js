var fs = require("fs");
//工作区创建目录，只能一级一级创建
fs.mkdir("tmp",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
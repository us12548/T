var fs = require("fs");
fs.rmdir("tmp",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录删除成功");
});

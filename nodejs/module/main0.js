//通过require，exports关键字来实现js文件间的相互引用
//如此用法，被nodejs称之为模块，像events,http,fs之类的都是模块
//  ./为当前目录
var hello = require("./main1");
hello.say();
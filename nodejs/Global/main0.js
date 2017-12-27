//全局对象Global,所有全局变量都是glolal的属性，全局变量之一：_filename,_dirname,setTimeout,setInterval,console
console.log(__filename);
console.log(__dirname);
console.log(process.memoryUsage());
// setTimeout(() => {
//     console.log("hello world");
// }, 1000);

//setInterval(()=>{console.log("interval")},1000);

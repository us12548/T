//写入缓冲区
//类似数组，但是定义时长度给少了，也不会报错,估计会自动截断
buf = Buffer.alloc(2);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
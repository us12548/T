//ascii编码
//Buffer类，也叫缓冲区，专门存储二进制数据，字符串进来，二进制出去
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
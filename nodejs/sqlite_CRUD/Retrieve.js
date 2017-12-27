// DEMO
// var sqlite3 = require('sqlite3');  
// var db = new sqlite3.Database('/tmp/1.db',function() {  
//   db.run("create table test(name varchar(15))",function(){  
//     db.run("insert into test values('hello,world')",function(){  
//       db.all("select * from test",function(err,res){  
//         if(!err)  
//           console.log(JSON.stringify(res));  
//         else  
//           console.log(err);  
//       });  
//     })  
//   });  
// });  


var sqlite3 = require('sqlite3');  
var db = new sqlite3.Database('c:/sqlitedb/t.db',function(){  
      db.all("select * from company where id = 10",function(err,res){  
        if(!err) {
          console.log(JSON.stringify(res));  
        }
        else{  
          console.log(err);  
        }
      });  
    } 
);  
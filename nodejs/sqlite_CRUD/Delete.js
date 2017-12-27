//与T-SQL不一样，from关键字不能省略
var sqlite3 = require('sqlite3');  
var db = new sqlite3.Database('c:/sqlitedb/t.db',function(){  
      db.run("delete from company where id = 10",function(){  
        db.all("select * from company",function(err,res){  
            if(!err)  
                 console.log(JSON.stringify(res));  
            else  
                console.log(err);  
         });  
      });  
    } 
);  
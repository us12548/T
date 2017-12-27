var sqlite3 = require('sqlite3');  
var db = new sqlite3.Database('c:/sqlitedb/t.db',function(){  
      db.run("insert into company(id,name,age,address,salary)values(10,'caozijian',33,'beijing',30000)",function(){  
        db.all("select * from company where id=10",function(err,res){  
            if(!err)  
                 console.log(JSON.stringify(res));  
            else  
                console.log(err);  
         });  
      });  
    } 
);  
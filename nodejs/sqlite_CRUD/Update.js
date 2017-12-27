var sqlite3 = require('sqlite3');  
var db = new sqlite3.Database('c:/sqlitedb/t.db',function(){  
      db.run("update company set name ='PPO' where id = 1",function(){  
        db.all("select * from company where id =1",function(err,res){  
            if(!err)  
                 console.log(JSON.stringify(res));  
            else  
                console.log(err);  
         });  
      });  
    } 
);  
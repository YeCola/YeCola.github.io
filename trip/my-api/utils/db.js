


//  链接 mongoose 数据库  

var mongoose = require("mongoose");

const hostname = "0.0.0.0";
const port = 27017;
const dbName = "trip"; 

const CONN_DB_STR = `mongodb://${hostname}:${port}/${dbName}`;

mongoose.connect(CONN_DB_STR,{useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("mongodb 链接成功")
})

connection.on("err",(err)=>{
    throw err;
    console.error(err);
})

module.exports = mongoose;




// 造轮子  
// exports.conn = function(callback){   // 链接数据库的对象 
//     mongoose.connect(CONN_DB_STR,{useNewUrlParser: true},(err)=>{
//         if(err){
//             console.log("数据库链接失败...")
//             callback(err,null);
//         }else{  
//             console.log("数据库链接success...")
//             callback(null,mongoose);   // 得到链接成功的 mongoose对象 
//         }
//     })
// }



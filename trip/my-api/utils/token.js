const jwt = require("jsonwebtoken");

// 秘钥
const secret = "wuhan1903";

// 生成 token 

exports.createToken = function(data){
    return jwt.sign(data,secret);
}


exports.checkToken = function(token){
    return new Promise(function(resolve,reject){
        jwt.verify(token,secret,(err,data)=>{
            if(err){
                throw err;
                reject("token 校验失败");
            }else{
                resolve(data);
            }
        })
    })
}


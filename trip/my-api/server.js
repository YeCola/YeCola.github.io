

const http = require("http");
const express = require("express");
const cors = require("cors");
const path = require("path")


const app = express();


const hostname = "0.0.0.0";
const port = 8889;

var connection =require("./utils/db")
var react = require("./react")
var massageRouter = require("./massageRouter")

var server = http.createServer(app);
app.use(express.static(path.join(__dirname,"/")))
app.use(express.json());   // req.body 获取 post  请求提交的 POSTData    $.post
app.use(express.urlencoded({ extended: false }));  //  form method="POST" 

app.use(cors())
app.get("/demo", (req, res) => {
    res.send("这是 武汉903 项目的 接口地址")
})

app.get("/index/:username", (req, res) => {
    res.json({
        code: 1,
        msg: "index 接口数据请求成功",
        query: req.query, // 查询参数  ？拼接
        // params: req.params, // 路由参数 ：声明
        // path: req.path,      // 路由路径 
        // headers: req.headers  // 请求头  
    })
})


app.use("/react", react)
// app.use 设置中间件 所有的中间件本质都是一个函数 中间件有先后之分

app.use("/message", massageRouter)
server.listen(port, hostname, () => {
    console.log(`you server is running , 监听http://${hostname}:${port}`)
})
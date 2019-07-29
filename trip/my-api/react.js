

var express = require("express");

var router = express.Router();

var { User, treal, tripData } = require("./utils/schema.js")

var { getResult } = require("./config")

var { createToken, checkToken } = require("./utils/token");
// 校验账号和密码
router.post("/login", (req, res) => {
    const {
        username,
        password
    } = req.body;
    User.find({
        username,
        password
    }).then((data) => {
        console.log(data);
        if (data.length > 0) {
            let username = data[0].username
            let name = data[0].name
            let img = data[0].img
            let age = data[0].age
            let address = data[0].address
            let marriage = data[0].marriage
            let sex = data[0].sex
            let identify = data[0].identify
            const token = createToken({ username, name, img, age, address, marriage, sex, identify });
            res.json({
                code: 200,
                msg: "登录成功",
                token,
                data
            })
        } else {
            res.json({
                code: -1,
                msg: "账号或密码错误",
            })
        }
    }).catch((err) => {
        res.json({
            code: 500,
            msg: "服务器错误",
        })
    })
})

// 获取旅游攻略
router.post("/gongnue", (req, res) => {

    treal.find({

    }).then((data) => {
        if (data.length > 0) {
            res.json({
                code: 200,
                msg: "刷新成功",
                data
            })
        } else {
            res.json({
                code: -1,
                msg: "获取数据失败",
            })
        }
    }).catch((err) => {
        res.json({
            code: 500,
            msg: "服务器错误",
        })
    })
})
// 上传路程数据到服务器
router.post("/map", (req, res) => {
    const {
        userid,
        name,
        distance,
        data,
        time,
        startplace,
        endplace,
        costtime
    } = req.body
    tripData.insertMany({
        userid,
        name,
        distance,
        data,
        time,
        startplace,
        endplace,
        costtime
    }).then((data) => {
        if (data.length > 0) {
            res.json({
                code: 200,
                msg: "新增数据成功",
                data
            })
        } else {
            res.json({
                code: -1,
                msg: "新增数据失败",
            })
        }
    })
})
// 获取数据
router.post("/getmap", (req, res) => {
    const { userid } = req.body
    tripData.find({
        userid
    }).then((data) => {
        if (data.length > 0) {
            res.json({
                code: 200,
                msg: "刷新成功",
                data
            })
        } else {
            res.json({
                code: -1,
                msg: "无出行记录",
            })
        }
    }).catch((err) => {
        res.json({
            code: 500,
            msg: "服务器错误",
        })
    })
})

// 上传头像
const multer = require("multer") // 辅助文件上传
const storage = multer.diskStorage({
    destination: function (req, flie, cb) {
        cb(null, "./public/avatar"); // 放置 路径
    },
    filename: function (req, file, cb) {
        // 修改文件名称
        cb(null, Date.now() + "wh" + file.originalname);
        // 123456wh1.jpg
    }
})
// 创建上传对象
const avatarUpload = multer({ storage }).any();

router.post("/uploadavatar", avatarUpload, (req, res) => {
    console.log("upload");
    console.log(req.files);
    console.log(req.query);
    var avatarUrl = req.files[0].path;
    var token = req.query.token;
    if (!token) {
        res.json({
            msg: "token 不存在,请登录",
            code: 500,
        });
        return;
    }
    checkToken(token).then((data) => {
        const { username } = data
        User.updateOne({
            username
        }, {
                $set: {
                    img: avatarUrl
                }
            }).then(result => {
                res.json({
                    msg: "头像上传成功",
                    code: 200,
                    avatarUrl
                })
            })
    })
})
router.post("/checktoken", (req, res) => {
    let { token } = req.body
    checkToken(token)
        .then((data) => {
            const { username } = data
            User.find({ username }).then((result) => {
                res.send({
                    code: 1,
                    msg: '获取用户信息成功',
                    userInfo: result[0]
                })
            })

        })
})

//修改个人信息
router.post("/change", (req, res) => {
    const { id, name, sex, age, address, marriage, identify } = req.body
    User.updateMany(
        { _id: id },
        { $set: { name, sex, age, address, marriage, identify } }
    ).then(() => {
        User.find({_id:id}).then((data)=>{
            res.json({
                msg: "个人信息更新成功",
                code: 200,
                data
            })
        })
        
    }).catch((err)=>{
        res.json({
            msg: "后台错误",
            code: 500,
        })
    })
})

module.exports = router;
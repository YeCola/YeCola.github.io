


const express = require("express")

const router = express.Router()

const { Message} = require("./utils/schema")

// 获取留言板信息
router.post("/get", (req, res) => {
    Message.find({}, {}).then((data) => {
        res.send({
            code: 1,
            msg: "获取留言板成功",
            data
        })
    }).then((err) => {
        res.send({
            code: -1,
            msg: "获取留言板失败",
            err
        })
    })
})

// 新增留言板
router.post("/add", (req, res) => {
    const { title, content } = req.body
    Message.insertMany({
        title, content
    }).then((data) => {
        return Message.find({})
    }).then((data) => {
        res.send({
            code: 1,
            msg: "新增留言成功",
            data
        })
    }).then(() => {
        res.send({
            code: -1,
            msg: "新增留言失败",
            err
        })
    })
})
// 删除留言
router.post("/del", (req, res) => {
    const { _id } = req.body
    Message.deleteMany({
        _id
    }).then((data) => {
        res.send({
            code: 1,
            msg: "删除留言成功",
            data
        })
    }).then(() => {
        res.send({
            code: -1,
            msg: "删除留言失败",
            err
        })
    })
})

module.exports = router
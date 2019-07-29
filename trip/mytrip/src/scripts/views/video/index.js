import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Head } from "../../components/head"
import { Card, WhiteSpace } from 'antd-mobile';

export class Video extends Component {
    constructor() {
        super()
        this.state = {
            show: true,
            show1: true,
            show2: true,
            show3: true
        }
    }
    playState = () => {
        this.setState({
            show: false
        })
        document.getElementById("myVideo").play()
    }
    playState1 = () => {
        this.setState({
            show1: false
        })
        document.getElementById("myVideo1").play()
    }
    playState2 = () => {
        this.setState({
            show2: false
        })
        document.getElementById("myVideo2").play()
    }
    playState3 = () => {
        this.setState({
            show3: false
        })
        document.getElementById("myVideo3").play()
    }
    render() {
        return (
            <div className="video">
                <Head title="景点小视频" backFlag={true} searchFlag={false} className="head" />
                <Card full>
                    <Card.Header
                        title="浪漫蜈支洲岛："
                        thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2365442150,930180347&fm=26&gp=0.jpg"
                        thumbStyle={{width:"35px",height:"35px"}}
                        extra={<span></span>}
                    />
                    <Card.Body>
                        <div id="videobox" className="enter">
                            <img id="img" src="http://m.tuniucdn.com/filebroker/cdn/vnd/7d/2d/7d2de9d080b1c5994ee575e4ac2b8758_w500_h280_c1_t0.jpg" alt="" style={{ display: this.state.show ? "block" : "none" }}/>
                            <video src="http://v.tuniucdn.com/images/xjlsp/hainan/hn_wzzd_ylw_lyx_ylw_tyhj_dxdt.mp4" controls="controls" style={{ width: "100%", height: "100%" }} id="myVideo"></video>
                            <i id="btn" className="iconfont icon-icon-test67" style={{ display: this.state.show ? "block" : "none" }} onClick={this.playState}></i>
                        </div>
                    </Card.Body>
                    <Card.Footer content="浪漫蜈支洲岛放肆玩放肆拍" extra={<div></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="泸沽湖："
                        thumb="http://m.tuniucdn.com/filebroker/cdn/res/b4/85/b485a36c49109334d1b801edc6ad4eb6_w500_h280_c1_t0.jpg"
                        thumbStyle={{ width: "35px", height: "35px" }}
                        extra={<span></span>}
                    />
                    <Card.Body>
                        <div id="videobox" className="enter">
                            <img id="img" src="http://m.tuniucdn.com/fb2/t1/G5/M00/09/29/Cii-tFomX46IXgmQABQEI8kOE7gAAAcOABVA10AFAQ7873_w640_h480_c0_t0.jpg" alt="" style={{ display: this.state.show1 ? "block" : "none" }} />
                            <video src="http://v.tuniucdn.com/images/xjlsp/yunnan/dali.mp4" controls="controls" style={{ width: "100%", height: "100%" }} id="myVideo1"></video>
                            <i id="btn" className="iconfont icon-icon-test67" style={{ display: this.state.show1 ? "block" : "none" }} onClick={this.playState1}></i>
                        </div>
                    </Card.Body>
                    <Card.Footer content="大理下关海景房远观洱海" extra={<div></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="马尔代夫："
                        thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2680781215,2052760860&fm=26&gp=0.jpg"
                        thumbStyle={{ width: "35px", height: "35px" }}
                        extra={<span></span>}
                    />
                    <Card.Body>
                        <div id="videobox" className="enter">
                            <img id="img" src="http://m.tuniucdn.com/fb2/t1/G5/M00/18/B7/Cii-slz_GsmIJRqJAFKHf4eHT0IAAWw0wBnW08AUoeX633_w500_h280_c1_t0.jpg" alt="" style={{ display: this.state.show2 ? "block" : "none" }} />
                            <video src="http://vodkgqsfvi9.vod.126.net/vodkgqsfvi9/74f3462c-d306-43f5-9da0-9dc4a91497db.mp4" controls="controls" style={{ width: "100%", height: "100%" }} id="myVideo2"></video>
                            <i id="btn" className="iconfont icon-icon-test67" style={{ display: this.state.show2 ? "block" : "none" }} onClick={this.playState2}></i>
                        </div>
                    </Card.Body>
                    <Card.Footer content="拖尾沙滩大片大片鱼群" extra={<div></div>} />
                </Card>
                <Card full>
                    <Card.Header
                        title="青海湖-茶卡："
                        thumb="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2249370349,937295146&fm=26&gp=0.jpg"
                        thumbStyle={{ width: "35px", height: "35px" }}
                        extra={<span></span>}
                    />
                    <Card.Body>
                        <div id="videobox" className="enter">
                            <img id="img" src="http://m.tuniucdn.com/fb2/t1/G5/M00/A0/2E/Cii-tFxuVYmIGWTZAD5OhK3A1yIAAUAZwCeOEIAPk6c476_w500_h280_c1_t0.jpg" alt="" style={{ display: this.state.show3 ? "block" : "none" }} />
                            <video src="http://vodkgqsfvi9.vod.126.net/vodkgqsfvi9/2168f012-4149-4119-8107-0fdb4dc88b1d.mp4" controls="controls" style={{ width: "100%", height: "100%" }} id="myVideo3"></video>
                            <i id="btn" className="iconfont icon-icon-test67" style={{ display: this.state.show3 ? "block" : "none" }} onClick={this.playState3}></i>
                        </div>
                    </Card.Body>
                    <Card.Footer content="景点类型多西北特色全覆盖" extra={<div></div>} />
                </Card>
            </div>
        )
    }
}
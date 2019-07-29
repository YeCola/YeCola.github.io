import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Head } from "../../components/head"

import { history } from "../../history";
import { Guide } from "../guide";

export class Hot extends Component {
    todetail = (title) => {
        history.push(`/mainview/introduce/${title}`)
    }
    render() {
        return (
            <div className="hot">
                <Head title="热门景点" backFlag={true} searchFlag={false} className="head" />
                <div className="hot-body">
                    <Guide />
                    <div className="title">
                        <span>━ 最强推荐 ━</span>
                    </div>
                    <ul>
                        <li onClick={() => this.todetail("建宁")}>
                            <div className="lidiv">
                                <span style={{display:"block",lineHeight:"40px",fontSize:"24px"}}>2019/07/25</span>
                                <span className="content">
                                    建宁万亩梨花赏花活动
                                    <span className="dot">●</span>
                                </span>
                            </div>
                            <img src={require("@/assets/img/hot1.png")} alt="" />
                        </li>
                        <li onClick={() => this.todetail("白水洋")}>
                            <div className="lidiv">
                                <span style={{ display: "block", lineHeight: "40px", fontSize: "24px" }}>2019/07/25</span>
                                <span className="content">
                                    白水洋万人狂欢泼水节
                                    <span className="dot">●</span>
                                </span>
                            </div>
                            <img src={require("@/assets/img/hot2.png")} alt="" />
                        </li>
                        <li onClick={() => this.todetail("海神妈祖")}>
                            <div className="lidiv">
                                <span style={{ display: "block", lineHeight: "40px", fontSize: "24px" }}>2019/07/25</span>
                                <span className="content">
                                    纪念海神妈祖诞辰 湄洲岛精彩上演民俗啊歌舞秀
                                    <span className="dot">●</span>
                                </span>
                            </div>
                            <img src={require("@/assets/img/hot3.png")} alt="" />
                        </li>
                        <li onClick={() => this.todetail("春祭")}>
                            <div className="lidiv">
                                <span style={{ display: "block", lineHeight: "40px", fontSize: "24px" }}>2019/07/25</span>
                                <span className="content">
                                    春祭大典活动现场图片
                                    <span className="dot">●</span>
                                </span>
                            </div>
                            <img src={require("@/assets/img/hot4.png")} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

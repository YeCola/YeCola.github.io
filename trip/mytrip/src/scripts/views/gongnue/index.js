


import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Head } from "../../components/head"
import { axios } from "../../axios";
import { history } from "../../history";

export class Tourist extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.post("/react/gongnue", {

        }).then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
    todetail = (title) => {
        history.push(`/mainview/introduce/${title}`)
    }
    render() {
        const {
            list
        } = this.state
        return (
            <div className="lv">
                <Head title="旅游攻略" backFlag={true} searchFlag={false} className="head" />
                <div className="lv-body">
                    <img className="lv-img" src={require("@/assets/img/lv.jpg")} alt="" />
                    <div className="recommend">
                        <div className="all">
                            <span>推荐攻略</span>
                            <span>查看全部</span>
                        </div>
                        <ul>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => this.todetail(item.title)}>
                                            <div>
                                                <p className="title sl">{item.title}</p>
                                                <p className="content sl-2 ">{item.introduce}</p>
                                            </div>
                                            <img src={require(`@/assets/img/${item.img}`)} alt="" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="main">
                            <div className="title">
                                <span>━ 游记攻略 ━</span>
                            </div>
                            <div className="youji">
                                <div className="youji-lv">
                                    <div className="bigshadow" onClick={() => this.todetail("霞浦")}></div>
                                    <div className="shadow">　霞浦：北岐拍日出</div>
                                </div>
                                <div className="youji-tui">
                                    <div className="tui-content" style={{ borderRight: "2px solid rgba(243, 243, 243, 1)" }} onClick={() => this.todetail("福建泉州")}>
                                        <div className="tui-title" >穿越千年的繁华，福建泉州超详攻略</div>
                                        <div className="tui-main">
                                            <span>游记攻略　　</span>
                                            <span>2019/07/25</span>
                                        </div>
                                    </div>
                                    <div className="tui-content" onClick={() => this.todetail("福建武夷山")}>
                                        <div className="tui-title" >去福建武夷山游玩，看这篇攻略就够</div>
                                        <div className="tui-main">
                                            <span>游记攻略　　</span>
                                            <span>2019/07/25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Foot } from "../../components/foot"
import { NoticeDemo } from '../../components/noticebar';
import { history } from "../../history"
import { connect } from "react-redux";
import {axios}from "../../axios"
import { getUserInfo } from "../../actions";
@connect()
class Home extends Component {

    togongnue = () => {
        history.push("/mainview/gongnue")
    }
    togohot = () => {
        history.push("/mainview/hot")
    }
    togovideo = () => {
        history.push("/mainview/video")
    }
    togomap = () => {
        history.push("/mainview/map")
    }
    render() {
        return (
            <div className="triphome">
                <NoticeDemo noticeContent="世界那么大，出去看看吧！读万卷书不如行万里路，蹉跎岁月不曾留下遗憾！" style={{ opacity: 0 }} />
                <ul className="nav">
                    <li onClick={this.togongnue}>旅游攻略</li>
                    <li onClick={this.togohot}>热门景点</li>
                    <li onClick={this.togovideo}>景点一览</li>
                    <li onClick={this.togomap}>地图直通车</li>
                </ul>
                <Foot></Foot>
            </div>
        )
    }
}
export { Home }

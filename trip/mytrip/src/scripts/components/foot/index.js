import "./index.scss"

import React, { Component } from "react"; //负责创建组件 管理组件
import { NavLink } from "react-router-dom";
import { Badge } from "antd-mobile";
import { connect } from "react-redux";
export const foots = [
    { txt: "首页", path: "/mainview/home", name: "home", icon: "icon-kongzhitaishouye" },
    { txt: "出行向导", path: "/mainview/map", name: "map", icon: "icon-icon-test40" },
    { txt: "旅行日志", path: "/mainview/road", name: "road", icon: "icon-icon-test8" },
    { txt: "我的", path: "/mainview/mine", name: "mine", icon: "icon-icon-test37" }
];

@connect()
class Foot extends Component {
    render() {
        return (
            <footer>
                {
                    foots.map((foot, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont " + foot.icon}></i>
                                    <span>{foot.txt}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}
export { Foot }
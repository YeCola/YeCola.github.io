import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Foot } from "../../components/foot"
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { history } from "../../history"
const tabs = [
    { title: <Badge>徒步</Badge> },
    { title: <Badge>跑步</Badge> },
    { title: <Badge>骑行</Badge> },
    { title: <Badge>自驾</Badge> },
];
export class Line extends Component {
    tomap=()=>{
        history.push("/mainview/map")
    }
    render() {
        return (
            <div className="trip">
                <div className="trip-box">
                    <img className="trip-bg" src={require("../../../assets/img/bg.png")} alt="" />
                    <div className="trip-con">
                        <Tabs tabs={tabs}
                            initialPage={1}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div className="trip-border">
                                <p>预计徒步</p>
                                <strong>0.0</strong>
                                <p>本月徒步0.0公里>></p>
                                <div className="trip-start" onClick={this.tomap}>开始徒步</div>
                            </div>
                            <div className="trip-border">
                                <p>预计跑步</p>
                                <strong>0.0</strong>
                                <p>本月跑步0.0公里>></p>
                                <div className="trip-start" onClick={this.tomap}>开始跑步</div>
                            </div>
                            <div className="trip-border">
                                <p>预计骑行</p>
                                <strong>0.0</strong>
                                <p>本月骑行0.0公里>></p>
                                <div className="trip-start" onClick={this.tomap}>开始骑行</div>
                            </div>
                            <div className="trip-border">
                                <p>预计自驾</p>
                                <strong>0.0</strong>
                                <p>本月自驾0.0公里>></p>
                                <div className="trip-start" onClick={this.tomap}>开始自驾</div>
                            </div>
                        </Tabs>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }
}

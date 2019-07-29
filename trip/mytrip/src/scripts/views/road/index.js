import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Head } from "../../components/head"
import { Foot } from "../../components/foot"
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { axios } from "../../axios"
import { connect } from "react-redux";
@connect(
    state => {
        return {
            userInfo: state.getIn(["data", "userInfo"])
        }
    }
)
class Road extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.post("/react/getmap", {
            userid: this.props.userInfo._id
        }).then((res) => {
            if (res.data.code == 200) {
                this.setState({
                    list: res.data.data
                })
            }
        })
    }

    render() {
        return (
            <div className="road">
                <Head title="旅行日志" backFlag={false} searchFlag={false} />
                <div className="maincontent">
                    {
                        this.state.list.map((item, i) => {
                            return (
                                <div key={i} style={{ position: "relative" }} >
                                    <div style={{ position: "absolute", top: "20px", left: "100px", fontSize: "16px", zIndex: "10" }}>From:　{item.startplace}</div>
                                    <div style={{ position: "absolute", top: "50px", left: "150px", fontSize: "16px", zIndex: "10" }}>To:　{item.endplace}</div>
                                    <WingBlank size="lg">
                                        <WhiteSpace size="lg" />
                                        <Card>
                                            <Card.Header
                                                // title={item.startplace}
                                                thumb={localStorage.avatar ? "http://101.200.179.113:8889/" +localStorage.avatar:"http://101.200.179.113:8889/" + this.props.userInfo.img}
                                                thumbStyle={{ width: "50px", height: "50px" }}
                                            // extra={item.endplace}
                                            />
                                            <Card.Body>
                                                <span>行程总长：</span>
                                                <span>{item.distance / 1000}</span>
                                                <span>公里</span>
                                                <br />
                                                <span>所花时长：</span>
                                                <span>{item.costtime < 60 ? item.costtime + "分钟" : parseInt(item.costtime / 60) + "小时" + item.costtime % 60 + "分钟"}</span>
                                            </Card.Body>
                                            <Card.Footer content={item.data} extra={<div>{item.time}</div>} />
                                        </Card >
                                    </WingBlank>
                                    <div style={{height:70,display:i==this.state.list.length-1?"block":"none"}}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <Foot />
            </div>
        )
    }
}
export { Road }
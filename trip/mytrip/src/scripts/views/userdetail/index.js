import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Foot } from "../../components/foot"
import { connect } from "react-redux";
import { Button, Input } from "antd";
import { Toast } from "antd-mobile"
import { axios } from "../../axios"
import { getUserInfo } from "../../actions";
import { Compare} from "../echar"

@connect(
    state => {
        return {
            userInfo: state.getIn(["data", "userInfo"])
        }
    }
)
class UserDetail extends Component {
    constructor() {
        super()
        this.state = {
            inpshow: false
        }
    }
    changeUseIinfo = (id) => {
        if (this.nameinp.state.value && this.sexinp.state.value && this.ageinp.state.value && this.addressinp.state.value && this.marriageinp.state.value && this.identifyinp.state.value) {
            axios.post("/react/change", {
                id: id,
                name: this.nameinp.state.value,
                sex: this.sexinp.state.value,
                age: this.ageinp.state.value,
                address: this.addressinp.state.value,
                marriage: this.marriageinp.state.value,
                identify: this.identifyinp.state.value
            }).then((res) => {
                this.props.dispatch(getUserInfo(res.data.data[0]))
                this.setState({
                    inpshow: false
                })
                
            })
        } else {
            Toast.info("请填写完整信息")
        }

    }
    showinp = () => {
        this.setState({
            inpshow: true
        })
    }
    inphide = () => {
        this.setState({
            inpshow: false
        })
    }
    changeinfo=()=>{
        this.setState({
            inpshow: true
        })
    }
    render() {
        return (
            <div className="me">
                <img className="me-bgimg" src={require("../../../assets/img/user-bg.png")} alt="" />
                <div className="me-top">
                    <img className="me-top-heaimg" src={localStorage.avatar ? "http://101.200.179.113:8889/" + localStorage.avatar : require("../../../assets/img/head.jpeg")} alt="" />
                    <p className="me-top-name">{this.props.userInfo.name}</p>
                    <p className="me-top-phone">账号:{this.props.userInfo.username}</p>
                    <div className="me-top-bto">
                        <p>
                            <span>10</span>
                            <span>好友</span>
                        </p>
                        <p>
                            <span>23</span>
                            <span>关注</span>
                        </p>
                        <p>
                            <span>109</span>
                            <span>粉丝</span>
                        </p>
                        <p>
                            <span>2</span>
                            <span>圈子</span>
                        </p>
                    </div>
                </div>
                <div className="me-con">
                    <h2 style={{ position: "relative"}}>
                        个人信息
                        <Button type="danger" style={{ lineHeight: "18px", fontSize: 14 ,position:"absolute",top:"-5px",right:"20px"}} onClick={this.changeinfo} >修改资料</Button>
                    </h2>
                    {
                        this.props.userInfo.name && <div className="me-con-user">
                            <p>
                                <span>昵称：</span>
                                <span>{this.props.userInfo.name}</span>
                            </p>
                            <p>
                                <span>性别：</span>
                                <span>{this.props.userInfo.sex}</span>
                            </p>
                            <p>
                                <span>年龄：</span>
                                <span>{this.props.userInfo.age}</span>
                            </p>
                            <p>
                                <span>家乡：</span>
                                <span>{this.props.userInfo.address}</span>
                            </p>
                            <p style={{ marginLeft: "10px" }}>
                                <span>情感状况：</span>
                                <span>{this.props.userInfo.marriage}</span>
                            </p>
                            <p>
                                <span>身份：</span>
                                <span>{this.props.userInfo.identify}</span>
                            </p>
                        </div>
                    }
                    {
                        !this.props.userInfo.name && <div style={{ width: "100%", height: "150px", textAlign: "center" }}>
                            <h2 style={{ width: "100%", height: "150px", lineHeight: "150px", textAlign: "center", fontSize: "20px" }} onClick={this.showinp}>点击完善个人信息</h2>
                        </div>
                    }
                    <div className="left" style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0,0,0,.5)", padding: "150px 20px", color: "#fff", display: this.state.inpshow ? "block" : "none",zIndex:"20" }} >
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20, color: "#fff" }}><div style={{ width: "120px" }}>昵称</div><Input defaultValue={this.props.userInfo.name} ref={el => this.nameinp = el} /></div>
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20 }}><div style={{ width: "120px" }}>性别</div><Input defaultValue={this.props.userInfo.sex} ref={el => this.sexinp = el} /></div>
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20 }}><div style={{ width: "120px" }}>年龄</div> <Input defaultValue={this.props.userInfo.age} ref={el => this.ageinp = el} /></div>
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20 }}><div style={{ width: "120px" }}>家乡</div><Input defaultValue={this.props.userInfo.address} ref={el => this.addressinp = el} /></div>
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20 }}><div style={{ width: "120px" }}>情感状况</div><Input defaultValue={this.props.userInfo.marriage} ref={el => this.marriageinp = el} /></div>
                        <div style={{ display: "flex", marginBottom: 10, fontSize: 20 }}><div style={{ width: "120px" }}>身份</div><Input defaultValue={this.props.userInfo.identify} ref={el => this.identifyinp = el} /></div>
                        <Button type="danger" onClick={() => this.changeUseIinfo(this.props.userInfo._id)} style={{ width: "100%", height: "40px", fontSize: 16, marginBottom: "15px" }}>确定</Button>
                        <Button type="danger" style={{ width: "100%", height: "40px", fontSize: 16 }} onClick={this.inphide}>取消</Button>
                    </div>
                    <h2>出行里程</h2>
                    <div className="me-con-data">
                        <Compare/>
                    </div>
                </div>
                <Foot />
            </div>
        )
    }
}
export { UserDetail }
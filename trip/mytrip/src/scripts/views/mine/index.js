import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Foot } from "../../components/foot"
import { history } from "../../history"
import { axios } from "../../axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../actions"
import immutable from "immutable"
import { Toast } from "antd-mobile"

@connect(
    state => {
        return {
            userInfo: state.getIn(["data", "userInfo"])
        }
    }
)
class Mine extends Component {
    touserdetail = () => {
        if (localStorage.token) {
            history.push("/mainview/userdetail")
        }else{
            Toast.info("请先登录！")
        }
    }
    exitlogin = () => {
        localStorage.token = "";
        localStorage.avatar = "";
        this.props.dispatch(getUserInfo(immutable.fromJS({

        })))
        history.push("/mainview/login")
    }
    render() {
        const {
            userInfo,
            dispatch
        } = this.props;
        console.log(userInfo)
        return (
            <div className="user">
                <img className="user-bgimg" src={require("../../../assets/img/user-bg.png")} alt="" />
                <div className="user-con">
                    <div className="user-title">
                        <div className="user-title-top">
                            <span className="me-top-outbtn" onClick={this.exitlogin}>退出登录</span>
                            <UploadImg className="touxiang" userInfo={userInfo} dispatch={dispatch}></UploadImg>
                            <div className="user-title-top-con">
                                <p>{this.props.userInfo.name}</p>
                                <p>账号:{this.props.userInfo.username}</p>
                            </div>
                        </div>
                        <div className="user-title-bto">
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
                    <div className="user-tool">
                        <div className="user-tool-title">我的信息</div>
                        <div className="user-tool-box">
                            <p onClick={this.touserdetail}>
                                <img src={require("../../../icons/svg/mileage.svg")} alt="" />
                                <span>个人信息</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/trend.svg")} alt="" />
                                <span>出行趋势</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/Analysis.svg")} alt="" />
                                <span>数据分析</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/Medal.svg")} alt="" />
                                <span>成就殿堂</span>
                            </p>
                        </div>
                    </div>
                    <div className="user-more">
                        <div className="user-tool-title">更多功能</div>
                        <div className="user-tool-box">
                            <p>
                                <img src={require("../../../icons/svg/p1.svg")} alt="" />
                                <span>出行计划</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p2.svg")} alt="" />
                                <span>好友排名</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p3.svg")} alt="" />
                                <span>路况分析</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p4.svg")} alt="" />
                                <span>交通补助</span>
                            </p>
                        </div>
                        <div className="user-tool-box" style={{ marginTop: "5vw" }}>
                            <p>
                                <img src={require("../../../icons/svg/p5.svg")} alt="" />
                                <span>体重管理</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p6.svg")} alt="" />
                                <span>周报</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p7.svg")} alt="" />
                                <span>风险管控</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p8.svg")} alt="" />
                                <span>运动课堂</span>
                            </p>
                        </div>
                        <div className="user-tool-box" style={{ marginTop: "5vw" }}>
                            <p>
                                <img src={require("../../../icons/svg/p9.svg")} alt="" />
                                <span>智能硬件</span>
                            </p>
                            <p>
                                <img src={require("../../../icons/svg/p10.svg")} alt="" />
                                <span>心悦会员</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                        </div>
                    </div>
                </div>
                <Foot />
            </div>
        )
    }
}
// 上传头像
class UploadImg extends Component {
    constructor() {
        super();
        this.state = {
            avatar: ""
        }
    }

    componentDidMount() {
        if (localStorage.token) {
            axios.post("/react/checktoken", { token: localStorage.token }).then((res) => {
                // localStorage.avatar = res.data.userInfo.img ? res.data.userInfo.img : require("../../../assets/img/head.jpeg")
                this.setState({
                    avatar: res.data.userInfo.img ? "http://101.200.179.113:8889/" + res.data.userInfo.img : require("../../../assets/img/head.jpeg")
                })
            })
        }

        if (localStorage.avatar) {
            this.setState({
                avatar: "http://101.200.179.113:8889/" + localStorage.avatar
            })
        } else {
            this.setState({
                avatar: require("../../../assets/img/head.jpeg")
            })
        }
    }
    uploadFile = () => {
        console.log(this.one);
        this.one.click();
    }
    shangchuan = () => {
        const { userInfo, dispatch } = this.props;
        const data = new FormData(); // form 表单上传
        const file = this.one.files[0]; // 需要上传的文件
        data.append("avatar", file);
        axios({
            url: "/react/uploadavatar?token=" + sessionStorage.token,
            method: "POST",
            data: data,
            contentType: false,
            processData: false,
        })
            .then(res => {
                console.log(res.data);
                localStorage.avatar = res.data.avatarUrl;
                userInfo.avatar = res.data.avatarUrl;
                dispatch(getUserInfo(userInfo));

                this.setState({
                    avatar: "http://101.200.179.113:8889/" + res.data.avatarUrl
                })
            })
    }
    render() {
        const {
            avatar
        } = this.state;
        return (
            <div id="photo">
                <img src={avatar} alt="上传头像" onClick={localStorage.token ? this.uploadFile : null} className="tou" />
                <input type="file" ref={el => this.one = el} accept="img/*" className="hiddenInput" onChange={this.shangchuan} />
            </div>
        )
    }
}
export { Mine }
import React, { Component } from "react"; //负责创建组件 管理组件
import { List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import "./index.scss"
import { axios } from "../../axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../actions"

@connect()
class Login extends Component {
    constructor() {
        super();
    }
    loginOnClick = () => {
        if (this.username.state.value && this.password.state.value) {
            axios.post("/react/login", {
                username: this.username.state.value,
                password: this.password.state.value
            }).then((res) => {
                if (res.data.code == 200) {
                    // 登录成功

                    var token = res.data.token;
                    localStorage.avatar= res.data.data[0].img;
                    localStorage.token = token;
                    sessionStorage.token = token;
                    this.props.dispatch(getUserInfo({
                        _id:res.data.data[0]._id,
                        username: res.data.data[0].username,
                        name: res.data.data[0].name, age: res.data.data[0].age, address: res.data.data[0].address, marriage: res.data.data[0].marriage, img: res.data.data[0].img, sex: res.data.data[0].sex, identify: res.data.data[0].identify
                    }))
                    this.props.history.push("/mainview/userdetail");
                } else {
                    sessionStorage.token = "";
                    localStorage.token = "";
                }
            })
        } else {
            Toast.info("请输入账号或密码！")
        }

    }
    render() {
        return (
            <div className="login">
                <div className="login-bg">
                    <h1 className="login-title">
                        <img src={require("../../../assets/img/logo.png")} alt="" />
                    </h1>
                    <div className="login-input">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                            ref={el => this.username = el}
                            onChange={this.checkUsername}
                        >手机号</InputItem>
                    </div>
                    <div className="pwdinp">
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            ref={el => this.password = el}
                            type="password"
                            onChange={this.checkPassword}
                        >密码</InputItem>
                    </div>
                    <div className="login-btn">
                        <img src={require("../../../icons/svg/login-btn.svg")} alt="" onClick={this.loginOnClick} />
                    </div>
                </div>
            </div >
        )
    }
}
export { Login }
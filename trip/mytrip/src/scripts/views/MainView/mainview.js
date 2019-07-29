import "./mainview.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Home } from "../home"
import { Mine } from "../mine"
import { Search } from "../search"
import { Scan } from "../scan"
import { Login } from "../login"
import { UserDetail } from "../userdetail"
import { Switch, Redirect, Route } from "react-router-dom"
import { Line } from "../line";
import { Road } from "../road";
import { MapDemo } from "../map";
import { Tourist } from "../gongnue";
import { Introduce } from "../introduce";
import { Hot } from "../hot";
import { Video } from "../video";
import { connect } from "react-redux";
import { axios } from "../../axios"
import { getUserInfo } from "../../actions";
@connect()
class MainView extends Component {
    componentDidMount() {
        if (localStorage.token) {
            let token = localStorage.token
            axios.post("/react/checktoken", { token }).then((res) => {
                console.log(res)
                this.props.dispatch(getUserInfo(res.data.userInfo))
            })
        }
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Switch>
                    <Route path="/mainview/home" component={Home} />
                    <Route path="/mainview/mine" component={Mine} />
                    <Route path="/mainview/search" component={Search} />
                    <Route path="/mainview/scan" component={Scan} />
                    <Route path="/mainview/login" component={Login} />
                    <Route path="/mainview/userdetail" component={UserDetail} />
                    <Route path="/mainview/line" component={Line} />
                    <Route path="/mainview/road" component={Road} />
                    <Route path="/mainview/map" component={MapDemo} />
                    <Route path="/mainview/gongnue" component={Tourist} />
                    <Route path="/mainview/introduce" component={Introduce} />
                    <Route path="/mainview/hot" component={Hot} />
                    <Route path="/mainview/video" component={Video} />
                </Switch>
            </div>
        )
    }
}

export { MainView }
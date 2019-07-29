import React, { Component } from "react"; //负责创建组件 管理组件
import { MainView } from "./views/MainView/mainview.js"
// import { Slide } from "./views/slide"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import ReactDOM, { render } from "react-dom"

import store from "./store"
import { Provider } from "react-redux"

export class LayOut extends Component {
    render() {
        return (
            <HashRouter>
                <Route component={MainRoute} />
            </HashRouter>
        )
    }
}

//这里放各种组件
export class MainRoute extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                <Switch>
                    <Route path="/mainview/" strict component={MainView} />
                    {/* <Route path="/slide" component={Slide} /> */}
                    <Redirect from="/" to="/mainview/home"/>
                </Switch>
            </div>
        )
    }
} 

const hotRender = () => {
    render(
        <Provider store={store}>
            <LayOut />
        </Provider>,
        document.getElementById("root")
    )
}


hotRender();

store.subscribe(hotRender);  //  state改变 store 会自动执行 刷新视图 
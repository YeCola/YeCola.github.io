import React, { Component } from "react"; //负责创建组件 管理组件
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';
import "./index.scss"
import {Head} from "../../components/head"
export class Search extends Component {
    constructor(){
        super()
        this.state={
            value:""
        }
    }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (
            <div>
                
                <Head title="搜索" searchFlag={false} backFlag={true}/>
                <WhiteSpace />
                <WingBlank></WingBlank>
                <SearchBar
                    placeholder="搜索更多的商品"
                    ref={ref => this.manualFocusInst = ref}
                    onChange={this.onchange}
                    clear
                />
                <WhiteSpace />
            </div>
        )
    }
}
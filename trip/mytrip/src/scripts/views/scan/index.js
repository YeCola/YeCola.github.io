import React, { Component } from "react"; //负责创建组件 管理组件
import { Head } from "../../components/head"

export class Scan extends Component {
    render() {
        return (
            <div>
                <Head title="扫一扫" backFlag={true} search={false}></Head>
            </div>
        )
    }
}
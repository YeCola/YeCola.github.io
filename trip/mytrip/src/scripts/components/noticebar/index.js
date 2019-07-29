import React, { Component } from "react"; //负责创建组件 管理组件
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

export class NoticeDemo extends Component {
    render() {
        const {
            noticeContent
        } = this.props
        return (
            <div>
                
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    {noticeContent}
                </NoticeBar>
                <WhiteSpace />
                
            </div>
        )
    }
}
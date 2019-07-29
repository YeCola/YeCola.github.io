import { NavBar, Icon, Popover, ActionSheet } from 'antd-mobile';
import React, { Component } from "react"; //负责创建组件 管理组件
import { history } from "../../history.js";
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const wrapProps = {
    onTouchStart: e => e.preventDefault(),
};

const showActionSheet = () => {
    const BUTTONS = ['拍照', '从手机相册中选择', '取消'];
    ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps
    },
        (buttonIndex) => {
            console.log(buttonIndex)
        });
}
export class Head extends Component {
    constructor() {
        super()
        this.state = {
            visible: false,
            selected: '',
        }
    }
    onSelect = (opt) => {

        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        // console.log(opt.props.value);

        const value = opt.props.value;
        if (value === "scan") {
            history.push("/mainview/scan")
        } else if (value === "login") {
            history.push("/mainview/login")
        } else if (value === "photo") {
            showActionSheet();
        }

    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    goback = (backFlag) => {
        if (backFlag) {
            history.go(-1)
        }
    }
    goSearch = () => {
        history.push("/mainview/search")
    }
    render() {
        const {
            backFlag,
            searchFlag
        } = this.props
        return (
            <NavBar
                mode="light"
                icon={backFlag && <Icon type="left" />}
                onLeftClick={() => this.goback(backFlag)}
                rightContent={[
                    searchFlag && <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.goSearch} />,
                    // <Popover mask
                    //     key="1"
                    //     overlayClassName="fortest"
                    //     overlayStyle={{ color: 'currentColor' }}
                    //     visible={this.state.visible}
                    //     overlay={[
                    //         (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                    //         (<Item key="5" value="photo" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>拍照</Item>),
                    //         (<Item key="6" value="login" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                    //             <span style={{ marginRight: 5 }}>登录</span>
                    //         </Item>),
                    //     ]}
                    //     align={{
                    //         overflow: { adjustY: 0, adjustX: 0 },
                    //         offset: [-10, 0],
                    //     }}
                    //     onVisibleChange={this.handleVisibleChange}
                    //     onSelect={this.onSelect}
                    // >
                    //     <div style={{
                    //         height: '100%',
                    //         padding: '0 15px',
                    //         marginRight: '-15px',
                    //         display: 'flex',
                    //         alignItems: 'center',
                    //     }}
                    //     >
                    //         <Icon type="ellipsis" />
                    //     </div>
                    // </Popover>
                ]}
            >{this.props.title}</NavBar>
        )
    }
}
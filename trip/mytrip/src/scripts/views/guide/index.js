import "./index.scss"

import React, { Component } from "react"; //负责创建组件 管理组件
import { Carousel, WingBlank } from 'antd-mobile';
export class Guide extends Component {
    state = {
        data: [
            require("@/assets/img/slide1.png"),
            require("@/assets/img/slide2.png"),
        ],
        imgHeight: "30%",
    }
    render() {
        return (
            <Carousel
                autoplay={true}
                dots={true}
                autoplayInterval="2000"
                infinite
            >
                {this.state.data.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item}
                            alt=""
                            style={{ width: '100%', height: '30%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: "30%" });
                            }}
                        />
                    </div>

                ))}
            </Carousel>
        );
    }
}
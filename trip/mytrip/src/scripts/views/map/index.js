
import "./index.scss"
import React, { Component } from "react"; //负责创建组件 管理组件
import { Toast, InputItem } from "antd-mobile"
import { Map, Marker, Polygon } from 'react-amap';
import { axios } from "../../axios.js"
import { Foot } from "../../components/foot"
import { connect } from "react-redux";
import { history } from "../../history";

@connect(
    state => {
        return {
            userInfo: state.getIn(["data", "userInfo"])
        }
    }
)
class MapDemo extends Component {
    constructor(props) {
        super(props);
        this.data = props;
        //地图事件
        this.state = {
            province: "",
            city: "",
            mapZoom: 15,
            mapCenter: [114.0169501, 30.36460893],
            plugins: ['ToolBar'],
            origin: "",
            destination: "",
            route: "",
            show: false,
            distance: "",
            startplace: "",
            endplace: "",
            costtime: ""
        }
        this.amapEvents = {
            created: (mapInstance) => {
                //eslint-disable-next-line
                var marker = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    //eslint-disable-next-line
                    position: new AMap.LngLat(116.39, 39.9),
                    title: this.state.city
                });

                mapInstance.add(marker);
            },
            click: (e) => {
                // console.log(e)
            }
        };

        //点位事件
        this.markerEvents = {
            click: (markerInstance) => {
                this.Position = [markerInstance.lnglat.lng, markerInstance.lnglat.lat];
                this.setState({
                    isShow: true,
                    mapCenter: this.position,

                });
            }
        };
    }
    componentDidMount() {
        if (localStorage.token) {
            axios.get("http://restapi.amap.com/v3/ip?key=db247292660deefc6083bcc40e7679ea").then((res) => {
                // console.log([Number(res.data.rectangle.split("\;")[1].split(",")[0]), Number(res.data.rectangle.split("\;")[1].split(",")[1])])
                this.setState({
                    province: res.data.province,
                    city: res.data.city,
                    mapZoom: 13,
                    mapCenter: [Number(res.data.rectangle.split("\;")[0].split(",")[0]), Number(res.data.rectangle.split("\;")[0].split(",")[1])]
                })
            })
        } else {
            history.push("/mainview/login")
        }
    }
    searchroad = () => {
        // console.log(this.startplace.state.value, this.endplace.state.value)
        if (this.startplace.state.value && this.endplace.state.value) {
            axios.get(`https://restapi.amap.com/v3/geocode/geo?address=${this.startplace.state.value}&key=db247292660deefc6083bcc40e7679ea`).then((res) => {
                // console.log(res.data.geocodes[0].location)
                this.setState({
                    origin: res.data.geocodes[0].location,
                    mapCenter: [Number(res.data.geocodes[0].location.split(",")[0]), Number(res.data.geocodes[0].location.split(",")[1])]
                })

            })
            axios.get(`https://restapi.amap.com/v3/geocode/geo?address=${this.endplace.state.value}&key=db247292660deefc6083bcc40e7679ea`).then((res) => {
                // console.log(res.data.geocodes[0].location)
                this.setState({
                    destination: res.data.geocodes[0].location
                })
            })

            setTimeout(() => {
                axios.get(`https://restapi.amap.com/v3/direction/driving?origin=${this.state.origin}&destination=${this.state.destination}&key=db247292660deefc6083bcc40e7679ea`).then((res) => {
                    console.log(res.data.route.paths[0].steps)
                    let route = res.data.route.paths[0].steps;
                    let html = ""
                    for (var i = 0; i < route.length; i++) {
                        html += route[i].instruction + ","
                    }
                    html = html.substring(0, html.length - 1) + "。"
                    this.setState({
                        show: true,
                        route: html,
                        distance: res.data.route.paths[0].distance,
                        startplace: this.startplace.state.value,
                        endplace: this.endplace.state.value,
                        costtime: res.data.route.taxi_cost,
                    })
                    if (localStorage.token) {
                        axios.post("/react/map", {
                            userid: this.props.userInfo._id,
                            name: this.props.userInfo.name,
                            distance: this.state.distance,
                            data: new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate(),
                            time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
                            startplace: this.state.startplace,
                            endplace: this.state.endplace,
                            costtime: this.state.costtime,
                        }).then()
                    }
                })
            }, 300)


        }

    }
    hide = () => {
        this.setState({
            show: false
        })
    }
    render() {

        return (
            <div style={{ width: "7.5rem", height: "620px", backgroundColor: "#fff", position: "relative" }}>
                <div className="routecontent" style={{ display: this.state.show ? "block" : "none" }} onClick={this.hide}>{this.state.route}</div>
                <div className="searchinp">
                    <InputItem
                        clear
                        placeholder="请输入起点"
                        ref={el => this.startplace = el}
                        onChange={this.origin}
                    >起点</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入终点"
                        ref={el => this.endplace = el}
                        onChange={this.destination}
                    >终点</InputItem>
                </div>
                <i className="iconfont icon-icon-test12" onClick={this.searchroad} />
                <Map amapkey={"db247292660deefc6083bcc40e7679ea"} city={this.state.city} zoom={this.state.mapZoom} center={this.state.mapCenter} events={this.amapEvents} plugins={this.state.plugins}>
                </Map>
                <Foot></Foot>
            </div>
        );
    }
}
export { MapDemo }

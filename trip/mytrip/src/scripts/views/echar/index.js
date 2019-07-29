import React, { Component } from 'react';
import "./index.scss"
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import { axios } from "../../axios"
import { connect } from "react-redux"

@connect(
    state => {
        return {
            userInfo: state.getIn(["data", "userInfo"])
        }
    }
)
class Compare extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            distance: [],
            classes: "",
            type: "",
        }
    }
    componentDidMount() {
        console.log(2222,this.props.userInfo)
        axios.post("/react/getmap", {
            userid: this.props.userInfo._id
        }).then((res) => {
           if(res.data.data){
               this.setState({
                   data: res.data.data.map((e) => { return e.data }),
                   distance: res.data.data.map((e) => { return e.distance / 1000 })
               })
           }  
          
        })
    }
    getOption = () => {
        let option = {
            title: {
                text: '',
                x: 'center',
                textStyle: {
                    color: 'skyblue',
                    fontSize: 18
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: { // 控制图的大小，调整下面这些值就可以，  
                y: 55,
                x: 40,
                x2: 75,
                y2: 155,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上  
                //去除边框线  
                borderWidth: 0
            },
            xAxis: {
                name:"出行时间",
                data: this.state.data,
                //设置为类目轴  
                type: 'category',
                //类目在分割线上  
                boundaryGap: true,
                axisLine: {
                    //轴线样式  
                    lineStyle: {
                        //设置轴线宽度  
                        width: 1,
                        //轴线颜色  
                        color: 'rgba(1,134,198,0.8)'
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    //轴线样式  
                    lineStyle: {
                        //设置轴线宽度  
                        width: 1,
                        //轴线颜色  
                        color: 'rgba(1,134,198,0.8)'
                    },
                },
                min: 0,
                // max: 100
            },
            dataZoom: [//局部放大
                {
                    show: false,
                    start: 0,
                    end: 100
                },
                {
                    type: 'inside',
                    start: 0,
                    end: 100
                },
                {
                    show: false,
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    width: 30,
                    height: '80%',
                    showDataShadow: false,
                    left: '93%'
                }
            ],
            series: [
                {
                    name: '路程距离',
                    type: 'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: this.state.distance,
                    barMaxWidth: 35,
                    itemStyle: {
                        normal: {
                            //柱状图颜色  
                            color: function (params) {
                                // 颜色列表  
                                var colorList = [
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',

                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)', 'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)',
                                    'rgb(194,35,43)', 'rgb(182,196,53)', 'rgb(253,206,15)', 'rgb(233,125,38)',
                                    'rgb(39,115,124)', 'rgb(255,131,99)', 'rgb(251,218,97)', 'rgb(95,192,221)',
                                    'rgb(226,80,75)', 'rgb(213, 75, 68)', 'rgb(285, 121, 29)', 'rgb(201, 118, 232)',
                                    'rgb(95, 165, 85)', 'rgb(253, 110, 56)', 'rgb(216, 50, 65)', 'rgb(233, 125, 38)',
                                    'rgb(39, 110, 114)', 'rgb(233, 105, 8)'];
                                //返回颜色  
                                return colorList[params.dataIndex];
                            },
                            //柱状图圆角  
                            barBorderRadius: 3
                        }
                    },
                }
            ]
        }
        return option
    }

    render() {
        return (
            <div>
                <ReactEcharts option={this.getOption()} style={{ height: '350px' }} />
            </div>

        )
    }
}
export { Compare }



import axios from "axios";
import { Toast } from "antd-mobile";

axios.defaults.baseURL = "http://101.200.179.113:8889/";   // 基路径

export function loadingToast(msg) {
    Toast.hide();
    Toast.loading(msg, 1, () => {

    });
}

export function failToast(msg) {
    Toast.hide();
    Toast.fail(msg, 1);
}

export function successToast(msg) {
    Toast.hide();
    Toast.success(msg, 1);
}

// 请求的拦截器 
axios.interceptors.request.use(function (config) {
    // config.data.token = "wuhan1903";
    loadingToast("请求中...")
    return config;
}, function (error) {

    failToast("请求失败")
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    console.log(response)
    setTimeout(() => {
        successToast(response.data.msg);
    }, 400)
    return response;
}, function (error) {
    failToast("响应失败")
    return Promise.reject(error);
});


export { axios }

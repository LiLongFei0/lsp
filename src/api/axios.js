import axios from 'axios'
import browser from '../common/browser'

// 创建 axios 实例
let http = axios.create({
    timeout: 60000
})

// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

//http.defaults.withCredentials = true

// 添加请求拦截器
http.interceptors.request.use(config => {
    //添加token
    const token = localStorage.getItem("lsp_token");
    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }
    //设置版本号
    if (!config.headers.ver) {
        config.headers.ver = "1.0";
    }

    if (config.method === 'post' || config.method === 'put') {
        // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
        //config.data = JSON.stringify(config.data)
    } else if (config.method === 'get' && browser.isIE) {
        // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
        let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
        config.url += symbol + '_=' + Date.now()
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
    let { data } = response
    if (data.code == -2) {
        localStorage.removeItem("lsp_token");
        localStorage.removeItem("lsp_user");
        window.location.href = "http://" + window.location.host + "/login"
    }
    return data
}, error => {
    let info = {}
    let { status, statusText, data } = error.response
    if (!error.response) {
        info = {
            code: 5000,
            msg: 'Network Error'
        }
    } else {
        info = {
            code: status,
            data: data,
            msg: statusText
        }
    }
    layer.alert('请求出错，请刷新页面后重试', { icon: 2 });
    return Promise.reject(info)
})

/**
* 创建统一封装过的 axios 实例
* @return {AxiosInstance}
*/
export default function () {
    return http
}
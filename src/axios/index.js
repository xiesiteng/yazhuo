import axios from 'axios'
import {Modal} from 'ant-design-vue'
import store from '@/store/index.js'
import NProgress from 'nprogress'
export default function $axios(options) {
    return new Promise((resolve, reject) => {
        let cookieName = process.env.VUE_APP_COOKIE
        let token = getCookie(cookieName)
        const instance = axios.create({
            baseURL: process.env.VUE_APP_PATH,
            withCredentials: false,
            //
            headers: {
                Authorization: `bearer ${token}`,
            },
            timeout: 10000,
        })
        instance.interceptors.request.use(
            (config) => {
                NProgress.start()
                console.log();
                let flag = config.url.includes('dict-area')
                if (!flag) {
                    store.commit('setLoading', true)
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            },
        )
        instance.interceptors.response.use(
            (response) => {
                NProgress.done()
                store.commit('setLoading', false)
                let data
                if (response.data == undefined) {
                    data = response.request.responseText
                } else {
                    data = response.data
                }
                switch (data.code) {
                    case 'SUCCESS':
                        return data
                    case 'BIZ.TOKEN_EXPIRATION':
                        //  window.location.href = process.env.VUE_APP_LOGIN_PATH
                        break
                    default:
                        Modal.error({
                            title: '提示',
                            content: data.msg,
                            okText: '确认',
                            cancelText: '取消',
                            centered: true,
                        })
                        return 'SYS-ERROR'
                }
            },
            (err) => {
                console.log(err)
                let content = ''
                NProgress.done()
                store.commit('setLoading', false)
                store.dispatch('setLoading', false)
                //ECONNABORTED
                if (err.code == 'ECONNABORTED') {
                    Modal.error({
                        title: '网络超时',
                        content: '请稍后再试',
                        okText: '确认',
                        cancelText: '取消',
                        centered: true,
                    })
                } else {

                    switch (err.response.status) {
                        case 400:
                            content = '请求错误'
                            break
                        case 401:
                            content = '未授权，请登录'
                            break
                        case 403:
                            content = '拒绝访问'
                            break
                        case 404:
                            content = `请求地址出错: ${err.response.config.url}`
                            break
                        case 408:
                            content = '请求超时'
                            break
                        case 500:
                            content = '服务器内部错误'
                            break
                        case 501:
                            content = '服务未实现'
                            break
                        case 502:
                            content = '网关错误'
                            break
                        case 503:
                            content = '服务不可用'
                            break
                        case 504:
                            content = '网关超时'
                            break
                        case 505:
                            content = 'HTTP版本不受支持'
                            break
                        default:
                            content = '链接失败'
                            break
                    }
                    Modal.error({
                        title: err.response.status,
                        content,
                        okText: '确认',
                        cancelText: '取消',
                        centered: true,
                    })
                }

                return Promise.reject(err)
            },
        )
        instance(options)
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
function getCookie(name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if ((arr = document.cookie.match(reg))) return unescape(arr[2])
    else return null
}

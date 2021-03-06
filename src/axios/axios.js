import axios from "axios";
// import store from "../store";
// import qs from 'qs'
import router from '../router'
import Vue from 'vue'
import { Message } from 'ant-design-vue';
Vue.use(Message);
Vue.prototype.$message = Message


let config = {
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

if (process.env.NODE_ENV == 'development') {
  // dev开发环境
  // config.baseURL = 'http://182.148.48.236:23432'
  config.baseURL = 'api'
  // config.baseURL = 'http://api.yazhuokj.com/'
} else if (process.env.NODE_ENV == 'production') {
  // build生产环境
  config.baseURL = 'http://api.yazhuokj.com/'
  // config.baseURL = 'http://182.148.48.236:23432'
}


const _axios = axios.create(config)

// _axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
// _axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8"
_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')


_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (localStorage.getItem('token')) {
      config.headers.common['Authorization'] = localStorage.getItem('token')
    }
    if (config.method == 'post') {
      // 可做字符串化传参数据
      // config.data = qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)


let self = Vue.prototype

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code == 200) {
      // 接口状态正常
      return Promise.resolve(response);
    } else if (response.data.code == 402) {
      self.$message.warning('登录已过期，请重新登录')
      localStorage.removeItem('token')
      router.replace(
        {
          path: '/login',
          query: { redirect: router.currentRoute.fullPath } // 登录成功后跳入浏览的当前页面
        }
      )

    } else {
      // 接口状态异常
      self.$message.error(response.data.message)
      return Promise.resolve(response);
    }
  },
  function (err) {
    self.$error(err.message)
    return Promise.reject(err)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    _axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    _axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}


export default _axios

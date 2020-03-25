import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 注册
  getAccount: data => post('/api/register', data),

  // 登录
  login: data => post('/api/login', data),

  // 微信登录获取url
  getCode: data => get('/wechat/getCodeUrl', data),

  // 执行微信登录
  wxLogin: data => get('/wechat/login', data),

  // 首页接口集合
  gitInfmByParams: data => get('/yzInformation/queryInfmByParams', data)
}

export default api
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

  // 导航栏信息目录
 getNavBarInfms: data => post('/yzInformation/queryNavigationBarInfms', data),

  // 首页接口集合
  getInfmByParams: data => post('/yzInformation/queryInfmByParams', data),

  // 首页列表接口集合
  getInfmAndSubList: data => post('/yzInformation/queryInfmAndSubList', data)
}

export default api
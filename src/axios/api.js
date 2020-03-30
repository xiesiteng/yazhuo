import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 注册
  getAccount: data => post('/api/register', data),

  // 登录
  login: data => post('/api/login', data),

  // 微信登录获取url
  getCode: data => get('/wechat/getCodeUrl', data),

  // 获取用户账号和微信是否绑定
  getBind: data => get('/wechat/getIsBindFlag', data),

  // 绑定账号和微信号
  bindAccount: data => get('/wechat/bindAccount', data),

  // 导航栏信息目录
 getNavBarInfms: data => post('/yzInformation/queryNavigationBarInfms', data),

  // 首页一维数组接口集合
  getInfmByParams: data => post('/yzInformation/queryInfmByParams', data),

  // 首页二维数组接口集合
  getInfmAndSubList: data => post('/yzInformation/queryInfmAndSubList', data),

  // 首页生态共建列表接口
  getEcologyInfm: data => post('/yzInformation/queryEcologyInfm', data),

  // 首页获取专家团队和合作学校的数据
  getTeamAndSchool: data => post('/yzInformation/queryEcologyInfmSubList', data)

}

export default api
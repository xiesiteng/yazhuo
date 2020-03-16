import axios from '@/axios/index.js'
export const loginInfo = () => {
    //获取登录信息
    return axios({
        url: '/v1/fds-pc/signed-faild-report/login-info',
    })
}
export const getenumerationData = () => {
    //获取枚举
    return axios({
        url: '/v1/fds-pc/sys-enum/key-values-map',
        method: 'get',
    })
}
export const getTableDataAxios = (data) => {
    //获取列表数据
    return axios({
        url: data.url,
        method: 'get',
        params: data.params,
    })
}
export const getAddress = (data) => {
    //获取地址
    return axios({
        url: `/v1/fds-pc/dict-area/child/${data}`,
    })
}
export const checkPeople = (data) => {
    return axios({})
}
export const login = (data) => {
    return axios({
        url: 'http://10.0.6.98:9999/server/authentication/form',
        data,
    })
}
export const UpFile = (data) => {
    //上传文件
    return axios({
        url: '/v1/fds-pc/pictures-info',
        method: 'post',
        data,
    })
}
export const picturesInfoDelete = (data) => {
    //图片删除
    return axios({
        url: `/v1/fds-pc/pictures-info/${data.id}/${data.status}`,
    })
}
export const createToken = () => {
    //获取图片token
    return axios({
        url: '/v1/fds-pc/pictures-info/create-token',
    })
}
export const mobiletokenvalue = (data) => {
    //加载手机图片
    return axios({
        url: '/v1/fds-pc/pictures-info/mobile-token-value',
        params: data,
    })
}
export const signedInfoId = (id) => {
    //根据id查询当前患者信息
    return axios({
        url: `/v1/fds-pc/signed-info/${id}`,
    })
}
export const newsenums = () => {
    //咨询信息枚举
    return axios({
        url: '/v1/fds-pc/sys-enumvalue/news-enums',
    })
}
export const signedResidentsInfoByidCard = (idCard) => {
    //获取家签居民信息
    return axios({
        url: `/v1/fds-pc/signed-residents-info/residents/${idCard}`,
    })
}
export const servicePackAll = (data) => {
    //获取全部服务包信息
    return axios({
        url: '/v1/com.yiboshi.fds/service-pack/all',
        params: data,
    })
}
export const signedId = (signedId) => {
    //获取签约信息对象
    return axios({
        url: `/v1/fds-pc/agreement-template/get-html/${signedId}`,
        method: 'get',
    })
}
export const picturesInfoOcr = (id) => {
    //识别身份证信息
    return axios({
        url: `/v1/fds-pc/pictures-info/ocr/${id}`,
    })
}
export const getDoctorTeamInfo = () => {
    //获取当前登录医生的信息
    return axios({
        url: '/v1/fds-pc/doctor-team-info/team',
    })
}
export const getLoginOrgInfo = () => {
    //获取挡墙登录的单位信息
    return axios({
        url: '/v1/fds-pc/org-info/login-org-info',
    })
}
export const displayByID = (id) => {
    //图片获取
    return axios({
        url: `/v1/fds-pc/pictures-info/display/${id}`,
    })
}

export const getDoctorTeamList = (id) => {
    // 获取登录医生所在团队的所有医生
    return axios({
        url: `/v1/fds-pc/doctor-team-member?pageSize=100&pageIndex=1&teamId=${id}`,
    })
}

export const getLoginDoctor = () => {
    //获取当前登录的医生
    return axios({
        url: '/v1/fds-pc/doctor-base-info/doctor_login',
    })
}

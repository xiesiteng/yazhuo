import axios from '@/axios/index.js'
export const signedInfoId = (id) => {
    //根据id查询当前患者信息
    return axios({
        url: `/v1/fds-pc/signed-info/${id}`,
    })
}
export const getPackItemsById = (id) => {
    //获取服务包详细
    return axios({
        url: `/v1/fds-pc/service-pack-items/packid-list?packId=${id}&pageIndex=1&pageSize=10`,
    })
}
export const getInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/residents-info/${id}`,
    })
}
export const getInfoBycardId = (cardId) => {
    return axios({
        url: `/v1/fds-pc/residents-info/card/${cardId}`,
    })
}
export const getContextBysignedId = (signedId) => {
    return axios({
        url: `/v1/fds-pc/agreement-template/get-html/${signedId}`,
    })
}
export const prescriptionList = (enumId) => {
    return axios({
        url: `/v1/fds-pc/health-prescription/enum-list/${enumId}`,
    })
}
export const prescriptionPost = (data) => {
    return axios({
        url: '/v1/fds-pc/health-prescription',
        method: 'post',
        data,
    })
}
export const executionTimecontrol = () => {
    return axios({
        url: '/v1/fds-pc/service-info/execution-time-control',
    })
}
export const residentsGroup = (residentId) => {
    return axios({
        url: `/v1/fds-pc/residents-groups/${residentId}`
    })
}
export const residentsGroupDefault = idCard => {
    return axios({
        url: `/v1/fds-pc/residents-groups/default/${idCard}`
    })
}
export const groupsPatch = data => {
    return axios({
        url: '/v1/fds-pc/residents-groups/batch',
        method: 'post',
        data
    })
}
export const deathInfo = residentId => {
    return axios({
        url: `/v1/fds-pc/residents-info/death-record/${residentId}`
    })
}
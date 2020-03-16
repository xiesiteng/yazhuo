import axios from '@/axios/index.js'
export const getresidentByIdCards = (idCard) => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/residents/${idCard}`,
    })
}
export const getServiceItemCountGroup = (data) => {
    return axios({
        url: `/v1/fds-pc/service-item-count/count`,
        method: 'get',
        params: data,
    })
}
export const a = (data) => {
    return axios({
        url: '/v1/fds-pc/service-item-count',
        method: 'get',
    })
}

export const aresidentsByIdCard = (teamId, idCard) => {
    return axios({
        url: `/v1/fds-pc/signed-info/base-info/${teamId}/${idCard}`,
    })
}
export const getSIngIDByresidentId = (residentId) => {
    return axios({
        url: `/v1/fds-pc/signed-info/base-info/${residentId}`,
    })
}
export const serviceItemCount = (data) => {
    return axios({
        url: '/v1/fds-pc/service-item-count',
        method: 'get',
        params: data,
    })
}
export const serviceItemCountHeadInfo = teamId => {
    return axios({
        url: `/v1/fds-pc/service-item-count/header-info/${teamId}`
    })
}
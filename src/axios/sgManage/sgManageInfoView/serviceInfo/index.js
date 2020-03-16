import axios from '@/axios/index.js'
export const statCountBysignedId = (signedId) => {
    return axios({
        url: `/v1/fds-pc/service-info/stat-service-count/${signedId}`,
    })
}
export const deathrecordPost = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-residents-info/death-record',
        method: 'post',
        data,
    })
}
export const lostVisitrecord = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-residents-info/lost-visit-record',
        method: 'post',
        data,
    })
}

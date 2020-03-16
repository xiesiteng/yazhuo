import axios from '@/axios/index.js'
export const checkInfo = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/check-info`,
        method: 'get',
        params: data,
    })
}
export const signedTime = () => {
    return axios({
        url: '/v1/fds-pc/signed-residents-info/signed-time',
    })
}
export const drcardidCard = (idCard) => {
    return axios({
        url: `/v1/fds-pc/residents-info/drcard/${idCard}`,
    })
}

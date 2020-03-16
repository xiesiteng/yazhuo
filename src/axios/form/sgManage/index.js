import axios from '@/axios/index.js'
export const residentsinfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/${id}`,
    })
}
export const residentsInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-residents-info',
        method: 'post',
        data,
    })
}
export const residentsInfoPut = (data,id) => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/${id}`,
        method: 'put',
        data,
    })
}
export const signedInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-info',
        method: 'post',
        data,
    })
}
export const signedInfoPut = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-info/${data.id}`,
        method: 'put',
        data,
    })
}
export const allowSignedList = () => {
    return axios({
        url: '/v1/fds-pc/service-pack/allow-signed-list',
    })
}

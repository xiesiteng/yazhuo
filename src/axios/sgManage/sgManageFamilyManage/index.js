import axios from '@/axios/index.js'
export const residentsFamilyPost = data => {
    return axios({
        url: '/v1/fds-pc/residents-family',
        method: 'post',
        data
    })
}
export const residentsIdCard = idCard => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/residents/${idCard}`,
        method: 'get'
    })
}

import axios from '@/axios/index.js'
export const messageInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/message-info',
        method: 'post',
        data,
    })
}
export const messageInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/message-info/${id}`,
    })
}
export const messageInfoPut = (data) => {
    return axios({
        url: `/v1/fds-pc/message-info/${data.id}`,
        method: 'put',
        data,
    })
}

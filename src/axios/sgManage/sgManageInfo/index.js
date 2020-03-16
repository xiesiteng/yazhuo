import axios from '@/axios/index.js'
export const signedINfosnapshotPost = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-info-snapshot',
        method: 'post',
        data,
    })
}
export const signedInfo = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-info/page',
        method: 'get',
        params: data,
    })
}
export const check = (signedId) => {
    return axios({
        url: `/v1/fds-pc/signed-info-snapshot/check/${signedId}`,
    })
}

import axios from '@/axios/index.js'
export const servicePackById = id => {
    return axios({
        url: `/v1/fds-pc/service-pack/${id}`
    })
}
export const packidList = data => {
    return axios({
        url: '/v1/fds-pc/service-pack-items/packid-list',
        method: 'get',
        params: data
    })
}

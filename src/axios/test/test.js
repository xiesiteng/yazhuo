import axios from '@/axios/index.js'
export const getTableData = data => {
    return axios({
        url: '/api/posts',
        method: 'get'
    })
}
export const getEnumeration = data => {
    return axios({
        url: '/home.json',
        method: 'get'
    })
}
export const a = () => {
    return axios({
        urL: '/v1/getCurrent'
    })
}

import axios from '@/axios/index.js'
export const orgOfficePost = data => {
    return axios({
        url: '/v1/fds-pc/org-office',
        method: 'post',
        data
    })
}
export const orgOfficePut = data => {
    return axios({
        url: `/v1/fds-pc/org-office/${data.id}`,
        method: 'put',
        data
    })
}
export const orgOfficePutState = data => {
    return axios({
        url: `/v1/fds-pc/org-office/${data.id}/${data.status}`,
        method: 'put'
    })
}

import axios from '@/axios/index.js'
export const residentsInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/${id}`,
        method: 'get',
    })
}
export const signedListByResidentId = (residentId) => {
    return axios({
        url: `/v1/fds-pc/signed-info/signed-list/${residentId}`,
    })
}

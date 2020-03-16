import axios from '@/axios/index.js'
export const residentsInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/residents-info/${id}`,
    })
}
export const orgInfoByparentId = (parentId) => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${parentId}`,
    })
}
export const downwardUnitList = (id) => {
    return axios({
        url: `/v1/fds-pc/referral-record/downward-unit-list/${id}`,
    })
}
export const downwardreferralPost = (data) => {
    return axios({
        url: '/v1/fds-pc/referral-record/downward-referral',
        method: 'post',
        data,
    })
}

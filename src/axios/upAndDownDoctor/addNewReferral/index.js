import axios from '@/axios/index.js'
export const upOrgInfoByTeamId = () => {
    return axios({
        url: `/v1/fds-pc/org-info/up_org_info`,
    })
}
export const upwardReferPost = (data) => {
    return axios({
        url: '/v1/fds-pc/referral-record/upward-referral',
        method: 'post',
        data,
    })
}
export const downwardrRferralPost = (data) => {
    return axios({
        url: `/v1/fds-pc/referral-record/downward-referral`,
        method: 'post',
        data,
    })
}
export const referralrecordById = (id) => {
    return axios({
        url: `/v1/fds-pc/referral-record/${id}`,
    })
}
export const referralrecorddetailById = (id) => {
    return axios({
        url: `/v1/fds-pc/referral-record/detail/${id}`,
    })
}
export const residentsInfoByIdCard = (idCard) => {
    return axios({
        url: `/v1/fds-pc/residents-info/card/${idCard}`,
    })
}
export const orgInfoById = (parentId) => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${parentId}`,
    })
}

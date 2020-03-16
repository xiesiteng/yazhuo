import axios from '@/axios/index.js'
export const residentsInfoByIdCard = (idCard) => {
    return axios({
        url: `/v1/fds-pc/residents-info/card/${idCard}`,
    })
}
export const getresidentsInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/residents-info/${id}`,
    })
}
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
export const hypertensionreferralPost = (data) => {
    return axios({
        url: '/v1/fds-pc/referral-record/hypertension-referral',
        method: 'post',
        data,
    })
}

import axios from '@/axios/index.js'
export const upOrgInfoByTeamId = teamId => {
    return axios({
        url: `/v1/fds-pc/org-info/up_org_info/${teamId}`
    })
}
export const upwardReferPost = data => {
    return axios({
        url: '/v1/fds-pc/referral-record/upward-referral',
        method: 'post',
        data
    })
}

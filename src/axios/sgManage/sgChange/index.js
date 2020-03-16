import axios from '@/axios/index.js'
export const unitByteamId = (teamId) => {
    return axios({
        url: `/v1/fds-pc/org-info/unit/${teamId}`,
    })
}
export const orgByparentId = (parentId) => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${parentId}`,
    })
}
export const getTeam = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-team-info',
        method: 'get',
        params: data,
    })
}
export const getDoctor = (teamId) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member/team-member/${teamId}`,
    })
}
export const signedChange = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-change',
        method: 'post',
        data,
    })
}

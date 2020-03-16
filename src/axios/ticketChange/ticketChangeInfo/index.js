import axios from '@/axios/index.js'
export const servicePackById = parentId => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${parentId}`
    })
}
export const doctorTeamInfo = data => {
    return axios({
        url: '/v1/fds-pc/doctor-team-info',
        params: data
    })
}

import axios from '@/axios/index.js'
export const getDoctorTeamInfo = () => {
    return axios({
        url: '/v1/fds-pc/doctor-team-info/team',
    })
}
export const serviceItemCount = (data) => {
    return axios({
        url: '/v1/fds-pc/service-item-count',
        method: 'get',
        params: data,
    })
}

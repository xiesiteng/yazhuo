import axios from '@/axios/index.js'
export const orgInfoByName = (name) => {
    return axios({
        url: `/v1/fds-pc/org-info?unitName=${name}&pageIndex=1&pageSize=50`,
    })
}
export const doctorTeamInfoById = (data) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-info?unitId=${data.unitId}&year=${data.year}&pageIndex=1&pageSize=50`,
    })
}
export const doctorTeamrelationGet = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-team-relation',
        method: 'get',
        params: data,
    })
}
export const doctorTeamrelationPost = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-team-relation',
        method: 'post',
        data,
    })
}
export const doctorTeamrelationPut = (id,data) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-relation/${id}`,
        method: 'put',
        data
    })
}

export const doctorMemberGet = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-team-member/',
        method: 'get',
        params: data,
    })
}



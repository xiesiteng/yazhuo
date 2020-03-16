import axios from '@/axios/index.js'
export const getAll = (unitId) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/getDoctorsByUnitId/${unitId}`,
    })
}
export const getInfoList = (unitId) => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${unitId}`,
    })
}

export const doctorTeamInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-team-info',
        method: 'post',
        data,
    })
}

export const doctorTeamInfoPut = (id, data) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-info/${id}`,
        method: 'put',
        data,
    })
}
export const getTeamInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-info/${id}`,
    })
}
export const doctorTeamInfoDelete = (id) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-info/${id}`,
        method: 'delete',
    })
}
export const servicePackById = (parentId) => {
    return axios({
        url: `/v1/fds-pc/org-info/org-info/${parentId}`,
    })
}
export const getDoctorList = (teamId) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member`,
        method: 'get',
        params: {
            pageIndex: 1,
            pageSize: 100,
            teamId,
        },
    })
}

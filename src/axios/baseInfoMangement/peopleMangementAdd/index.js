import axios from '@/axios/index.js'
export const orgOfficeGet = (data) => {
    return axios({
        url: '/v1/fds-pc/org-office',
        method: 'get',
        params: data,
    })
}
export const doctorBaseInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-base-info',
        method: 'post',
        data,
    })
}
export const doctorBaseInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/${id}`,
    })
}
export const doctorBaseInfoPut = (data) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/${data.id}`,
        method: 'put',
        data,
    })
}
export const querySystemByCurrentUserGet = () => {
    return axios({
        url: '/v1/fds-pc/doctor-base-info/querySystemByCurrentUser',
    })
}
export const queryRoleBySystemIdAndCurrentUnitById = (systemId) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/queryRoleBySystemIdAndCurrentUnit/${systemId}`,
    })
}
export const querySystemsAndRolesByDoctorIdByDoctorId = (doctorId) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/querySystemsAndRolesByDoctorId/${doctorId}`,
    })
}

export const querySystemByRelationIdAndUserType = (relationId,userType) => {//userType医生传1，单位传2
    return axios({
        url: `/v1/fds-pc/doctor-base-info/querySystemByRelationIdAndUserType?relationId=${relationId}&userType=${userType}`,
    })
}
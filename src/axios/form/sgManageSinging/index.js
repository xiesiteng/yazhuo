import axios from '@/axios/index.js'
export const allowsignedList = () => {
    return axios({
        url: `/v1/fds-pc/service-pack/allow-signed-list`,
    })
}
export const signedInfoById = (id) => {
    return axios({
        url: `/v1/fds-pc/signed-info/${id}`,
    })
}
export const getGroupsInfo = (residentId, signedId) => {
    return axios({
        url: `/v1/fds-pc/residents-groups/${residentId}/${signedId}`,
    })
}
export const getStartTimeAxios = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-info/valid-date/${data.residentId}/${data.signedDate}/${data.signedId}`,
    })
}
export const optionalDate = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-info/optional-date/${data.residentId}/${data.signedId}`,
    })
}

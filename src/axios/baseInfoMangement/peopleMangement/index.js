import axios from '@/axios/index.js'
export const doctorByIdCard = (cardId) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/doctor/${cardId}`,
    })
}
export const doctorProfessorApply = (data) => {
    return axios({
        url: '/v1/fds-pc/doctor-professor-apply',
        method: 'post',
        data,
    })
}
export const calloutById = (data) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/callout/${data.id}`,
        method: 'post',
        data,
    })
}
export const callinById = (data) => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/callin/${data.id}`,
        method: 'post',
        data,
    })
}
export const medicDoctor = () => {
    return axios({
        url: '/v1/fds-pc/doctor-base-info/medic-doctor',
        method: 'post',
    })
}

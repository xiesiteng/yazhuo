import axios from '@/axios/index.js'
export const prescriptionrecordPost = (data) => {
    return axios({
        url: '/v1/fds-pc/long-prescription-record',
        method: 'post',
        data,
    })
}
export const prescriptionrecordPut = (data) => {
    return axios({
        url: `/v1/fds-pc/long-prescription-record/${data.id}`,
        method: 'put',
        data,
    })
}
export const prescriptionrecordPostGetById = (id) => {
    return axios({
        url: `/v1/fds-pc/long-prescription-record/detail/${id}`,
    })
}

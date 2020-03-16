import axios from '@/axios/index.js'
export const longPrescriptionRecordsPost = (data) => {
    return axios({
        //添加长处方
        url: '/v1/fds-pc/long-prescription-record/long-prescription-records',
        method: 'post',
        data,
    })
}
export const longDrugs = (data) => {
    //根据类型获取所有长处方药品
    return axios({
        url: `/v1/fds-pc/long-drugs/${data}`,
    })
}
export const prescriptionrecordDelete = (id) => {
    return axios({
        url: `/v1/fds-pc/long-prescription-record/${id}`,
        method: 'delete',
    })
}

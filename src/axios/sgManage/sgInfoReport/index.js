import axios from '@/axios/index.js'
export const getdetailById = (id) => {
    return axios({
        url: `/v1/fds-pc/pkrk-2019/detail/${id}`,
    })
}
export const signedFileDelete = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-faild-report/${data.id}`,
        method: 'delete',
        data,
    })
}

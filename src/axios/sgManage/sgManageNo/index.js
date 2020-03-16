import axios from '@/axios/index.js'
export const sgManageNoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/signed-faild-report',
        method: 'post',
        data,
    })
}
export const signedfaildreportDelete = (id) => {
    return axios({
        url: `/v1/fds-pc/signed-faild-report/${id}`,
        method: 'DELETE',
    })
}

import axios from '@/axios/index.js'
export const handlereceivePut = (data) => {
    return axios({
        url: `/v1/fds-pc/referral-record/handle-receive/${data.referralId}/${
            data.code
        }`,
        method: 'put',
    })
}
export const referralrecorddetailById = (id) => {
    return axios({
        url: `/v1/fds-pc/referral-record/detail/${id}`,
    })
}

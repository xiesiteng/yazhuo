import axios from '@/axios/index.js'

export const batchPost = data => {
    return axios({
        url: `/v1/fds-pc/referral-attachment/batch/${data.referralId}`,
        method: 'post',
        data: data.postData
    })
}

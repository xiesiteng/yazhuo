import axios from '@/axios/index.js'
export const batchrenewsignedPost = data => {
    return axios({
        url: '/v1/fds-pc/signed-info/batch-renew-signed',
        method: 'post',
        data
    })
}

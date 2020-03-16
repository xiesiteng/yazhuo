import axios from '@/axios/index.js'
export const referralRecordPut = data => {
    return axios({
        url: `/v1/fds-pc/referral-record/${data.referralId}/${data.status}`,
        method: 'put'
    })
}
export const orgOfficeGet = data => {
    return axios({
        url: '/v1/fds-pc/org-office',
        method: 'get',
        params: data
    })
}
export const handleshuntofficePut = data => {
    return axios({
        url: `/v1/fds-pc/referral-record/handle-shunt-office/${
            data.referralId
        }/${data.officeId}`,
        method: 'put'
    })
}

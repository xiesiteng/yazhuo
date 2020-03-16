import axios from '@/axios/index.js'
export const bloodglucosePost = data => {
    return axios({
        url: '/v1/fds-pc/blood-glucose',
        method: 'post',
        data
    })
}
export const bloodglucosepage = residentId => {
    return axios({
        url: `/v1/fds-pc/blood-glucose/resident-blood-glucose-page/${residentId}/1/12`
    })
}

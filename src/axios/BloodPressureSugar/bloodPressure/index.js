import axios from '@/axios/index.js'
export const bloodPressurePost = data => {
    //新增
    return axios({
        url: '/v1/fds-pc/blood-pressure',
        method: 'post',
        data
    })
}
export const residentsWithBloodPressure = data => {
    //列表数据
    return axios({
        url: '/v1/fds-pc/blood-pressure/residents-with-blood-pressure/',
        method: 'post',
        data
    })
}
export const databloodpressure = residentId => {
    return axios({
        url: `/v1/fds-pc/blood-pressure/resident-blood-pressure-page/${residentId}/1/12`
    })
}

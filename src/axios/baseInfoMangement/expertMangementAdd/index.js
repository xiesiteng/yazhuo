import axios from '@/axios/index.js'
export const professorApplyPost = data => {
    return axios({
        url: '/v1/fds-pc/doctor-professor-apply',
        method: 'post',
        data
    })
}

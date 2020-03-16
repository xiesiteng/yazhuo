import axios from '@/axios/index.js'
export const professorApplyPut = data => {
    return axios({
        url: `/v1/fds-pc/doctor-professor-apply/${data.id}`,
        method: 'put',
        data
    })
}
export const doctorBycardId = cardId => {
    return axios({
        url: `/v1/fds-pc/doctor-base-info/doctor/${cardId}`
    })
}

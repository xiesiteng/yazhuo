import axios from '@/axios/index.js'
export const getInfoByIdCard = idCard => {
    return axios({
        url: `/v1/fds-pc/signed-residents-info/residents/${idCard}`
    })
}

export const getInfoByIdCard2 = idCard => {
    return axios({
        url: `/v1/fds-pc/residents-info/card/${idCard}`
    })
}

export const familymemberPost = data => {
    return axios({
        url: '/v1/fds-pc/residents-family-member',
        method: 'post',
        data
    })
}

export const familymemberDelete = id => {
    return axios({
        url: `/v1/fds-pc/residents-family-member/${id}`,
        method: 'DELETE'
    })
}

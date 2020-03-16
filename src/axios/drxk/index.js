import axios from '@/axios/index.js'
export const isSinged = (idCard) => {
    return axios({
        url: `/v1/fds-pc/signed-info/is-signed/${idCard}`,
    })
}

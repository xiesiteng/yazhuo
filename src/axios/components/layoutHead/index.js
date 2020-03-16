import axios from '@/axios/index.js'
export const aresidentsByIdCard = (teamId, idCard) => {
    return axios({
        url: `/v1/fds-pc/signed-info/base-info/${teamId}/${idCard}`,
    })
}

import axios from '@/axios/index.js';
export const signedfaildreportPost = data => {
    return axios({
        url: '/v1/fds-pc/signed-faild-report',
        method: 'post',
        data,
    });
};
export const signedfaildreportGetById = id => {
    return axios({
        url: `/v1/fds-pc/signed-faild-report/${id}`,
    });
};
export const signedfaildreportPut = data => {
    return axios({
        url: `/v1/fds-pc/signed-faild-report/${data.id}`,
        method: 'put',
        data,
    });
};

import axios from '@/axios/index.js';
export const doctorYeamInfoById = id => {
    return axios({
        url: `/v1/fds-pc/doctor-team-info/${id}`,
    });
};
export const teamdoctorPost = data => {
    return axios({
        url: '/v1/fds-pc/doctor-team-member/doctor',
        method: 'post',
        data,
    });
};
export const teamspecialistPost = data => {
    return axios({
        url: '/v1/fds-pc/doctor-team-member/specialist',
        method: 'post',
        data,
    });
};
export const teammemberById = teamId => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member/team-member/${teamId}`,
    });
};
export const doctorTeammemberEdit = (id,data) => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member/${id}`,
        method: 'put',
        data
    });
};
export const doctorTeammemberDelete = id => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member/${id}`,
        method: 'delete',
    });
};
export const directorPut = id => {
    return axios({
        url: `/v1/fds-pc/doctor-team-member/director/${id}`,
        method: 'put',
    });
};

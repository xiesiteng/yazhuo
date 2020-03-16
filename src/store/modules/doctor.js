import { getDoctorTeamList, getLoginDoctor } from '@/axios/global/index.js'
const doctor = {
    state: {
        doctorLoginInfo: {},
        doctorTeamList: [],
        doctorInfo: {},
    },
    mutations: {
        setDoctorLoginInfo(state, data) {
            state.doctorLoginInfo = data
        },
        setDoctorTeamList(state, data) {
            state.doctorTeamList = data
        },
        setDoctorTeamInfo(state, data) {
            state.doctorInfo = data
        },
    },
    actions: {
        async getDoctorTeamList({ commit }, id) {
            let { data } = await getDoctorTeamList(id)
            commit('setDoctorTeamList', data.dataList)
            console.log('团队医生', id, data.dataList)
            sessionStorage.setItem('doctorTeamList', JSON.stringify(data))
        },
        async getDoctorTeamInfo({ commit }) {
            let { data } = await getLoginDoctor()
            commit('setDoctorTeamInfo', data)
            sessionStorage.setItem('isYuxi', JSON.stringify(data))
        },
    },
    getters: {
        returnTeamId(state) {
            if (state.doctorLoginInfo.id) {
                return state.doctorLoginInfo.id
            } else {
                state.doctorLoginInfo = JSON.parse(
                    sessionStorage.getItem('doctorLoginInfo'),
                )
                return state.doctorLoginInfo.id
            }
        },
    },
}
export default doctor

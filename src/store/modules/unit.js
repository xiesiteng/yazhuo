import { Modal } from 'ant-design-vue'
import { getLoginOrgInfo } from '@/axios/global/index.js'
const unit = {
    state: {
        unitLoginInfo: {},
    },
    mutations: {
        setUnitLoginInfo(state, data) {
            state.unitLoginInfo = data
        },
    },
    actions: {
        async getLoginOrgInfo({ commit }) {
            let { data } = await getLoginOrgInfo()
            if (data) {
                sessionStorage.setItem('unitLoginInfo', JSON.stringify(data))
                // if (data.level == 3) {
                //     const NewMenu = [
                //         {
                //             asideMenu: true,
                //             title: '双向转诊管理',
                //             name: 'upAndDownDoctor',
                //             icon: 'swap',
                //             path: '/upAndDownDoctor',
                //             children: [
                //                 {
                //                     asideMenu: true,
                //                     title: '上转用户查询',
                //                     name: 'upReferral',
                //                     icon: 'arrow-up',
                //                     path: '/upAndDownUnit/managementList/0',
                //                 },
                //                 {
                //                     asideMenu: true,
                //                     title: '下转用户查询',
                //                     icon: 'arrow-down',
                //                     name: 'downReferral',
                //                     path: '/upAndDownUnit/managementList/1',
                //                 },
                //             ],
                //         },
                //     ]
                //     commit('setUpAndDown', NewMenu)
                // }
                commit('setUnitLoginInfo', data)
            }
        },
    },
    getters: {
        returnUnitId(state) {
            if (state.unitLoginInfo.id) {
                return state.unitLoginInfo.id
            } else {
                state.unitLoginInfo = JSON.parse(
                    sessionStorage.getItem('unitLoginInfo'),
                )
                return state.unitLoginInfo.id
            }
        },
    },
}
export default unit

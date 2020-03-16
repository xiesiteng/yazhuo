import {appRouter} from '@/router/router.js'
import {router} from '@/router/index.js'
import {Alert} from 'ant-design-vue'
const route = {
    state: {
        routeList: [
            {
                title: '工作台',
                path: '/home/doctorHome',
            },
            {
                title: '签约信息管理',
                path: '/sgManage/sgManageInfo',
            },
            {
                title: '新增签约',
                path: '/sgManage/sgManageInfoCheck',
            },
        ],
    },
    mutations: {
        setRouteList(state, data) {
            state.routeList.push(data)
            let routeList = JSON.stringify(state.routeList)
            sessionStorage.setItem('routeList', routeList)
        },
        setRouteListSession(state, data) {
            state.routeList = data
        },
        removeRouterItem(state, index) {
            let routerList = JSON.parse(JSON.stringify(state.routeList))
            let val = routerList[index - 1]
            state.routeList.splice(index, 1)
            sessionStorage.setItem('routeList', JSON.stringify(state.routeList))
            if (state.routeList.length > 3) {
                router.push({
                    path: val.path,
                })
            } else {
                router.push({
                    path: '/sgManage/sgManageInfo',
                })
            }
        },
    },
    actions: {
        getRouteList({commit, state}, data) {
            let path = data.path
            let R = state.routeList.some((item) => {
                return item.path == path
            })
            if (!R) {
                commit('setRouteList', data)
            }
        },
    },
}
export default route
function getTitle(node, name) {
    let title = ''
    node.forEach((i) => {
        i.children.forEach((e) => {
            if (e.name == name) {
                title = e.title
            } else {
                return
            }
        })
    })
    return title
}

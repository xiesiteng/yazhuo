import Vue from 'vue'
import Router from 'vue-router'
import sgManageInfoView from '@/view/sgManage/sgManageInfoView/index.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            name: 'ifSgManageInfoView',
            path: '/sgManageInfoView:id',
            component: sgManageInfoView,
        },
    ],
})

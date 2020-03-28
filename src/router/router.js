// import main from '@/layout/index/index.vue'
import login from '@/view/login/login.vue'
import middleEducation from '@/view/middleEducation/middleEducation.vue'
import homeIndex from '@/view/homeIndex/homeIndex'
import WisdomPlatform from '@/view/wisdomPlatform/wisdomPlatform.vue'
import School from '@/view/school/school.vue'
import solveCase from '@/view/solveCase/solveCase.vue'

export const links = [
    { path: '*', redirect: '/home' },
    {
        title: '首页',
        path: '/home',
        component: homeIndex,
    },
    {
        title: '智慧平台',
        path: '/wisdomPlatform',
        name: 'wisdomPlatform',
        component: WisdomPlatform,
    },
    {
        title: '亚卓学院',
        path: '/school',
        name: 'school',
        component: School,
    },
    {
        title: '登录',
        path: '/login',
        component: login,
        children: [],
    },
    {
        title: '中职教育',
        path: '/middleEducation',
        component: middleEducation,
    },
    {
        title: '解决方案',
        path: '/solveCase',
        component: solveCase,
    }
]
export const routers = [...links]

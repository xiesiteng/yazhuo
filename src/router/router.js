import main from '@/layout/index/index.vue'
import login from '@/layout/login/login.vue'
import middleEducation from '@/layout/middleEducation/middleEducation.vue'
import homeIndex from '@/view/homeIndex/homeIndex'
import School from '@/layout/school/school.vue'

export const links = [
    { path: '*', redirect: '/home' },
    {
        title: '首页',
        path: '/home',
        component: main,
        children: [
            {
                title: '首页',
                path: '/home',
                component: homeIndex
                // component: () => import('@/view/homeIndex/homeIndex'),
            },
            {
                title: '二级页',
                path: '/home/page2',
                name: 'page2',
                component: () => import('@/view/page2/page2'),
            },
            {
                title: '案例分享页',
                path: '/home/casesharing',
                name: 'casesharing',
                component: () => import('../view/casesharing/casesharing'),
            },
            {
                title: '职业教育/中职德育',
                path: '/home/educational-resources',
                name: 'educational-resources',
                component: () => import('../view/educational-resources/educational-resources'),
            },
            {
                title: '职业教育/中职德育',
                path: '/home/zzccomplishment',
                name: 'zzccomplishment',
                component: () => import('../view/zz-ccomplishment/zz-ccomplishment'),
            },
            {
                title: '班主任梦工厂',
                path: '/home/bzr-dreamWorks',
                name: 'bzr-dreamWorks',
                component: () => import('../view/bzr-dreamWorks/bzr-dreamWorks'),
            },
            {
                title: '职业教育/中职德育',
                path: '/home/ggbasic-class',
                name: 'ggbasic-class',
                component: () => import('../view/ggbasic-class/ggbasic-class'),
            },
            {
                title: '职业教育/中职德育',
                path: '/home/steam-page',
                name: 'steam-page',
                component: () => import('../view/steam-page/steam-page'),
            },
            {
                title: '产品中心',
                path: '/home/productcenter',
                name: 'productcenter',
                component: () => import('../view/productcenter/productcenter'),
            },
            {
                title: '云服务',
                path: '/home/CloudServices',
                name: 'CloudServices',
                component: () => import('../view/CloudServices/CloudServices'),
            },
            {
                title: '解决方案',
                path: '/home/solution',
                name: 'solution',
                component: () => import('../view/solution/solution'),
            },
            {
                title: '教育资源/综合实践课',
                path: '/home/zhClass',
                name: 'zhClass',
                component: () => import('../view/zhClass/zhClass'),
            },
            {
                title: '论坛/讨论',
                path: '/home/forum',
                name: 'forum',
                component: () => import('../view/forum/forum'),
            },
        ],
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
    }
]
export const routers = [...links]

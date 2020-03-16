export const tableData = []
export const isCollapse = true //菜单控制
export const collapsed = false //菜单控制
export const enumeration = {} //枚举
export const loading = false
export const total = 0
export const newState = false
export const modalData = {
    //无用数据
    modalVisible: false,
    data: {},
}
export const doctorInfo = {
    doctorId: '', //当前登陆医生ID
}
export const peopleInfo = {}
export const searchData = {}
export const content = ''
export const loginInfo = {}
//服务包
export const servicePack = []
//签约对象信息
export const signAgreementInfo = {}
//设置全局请求对象
//   data   url
//  data  包含请求参数
//
export const idCardInfo = {}
export const headers = {}
//设置团队负责人的时候，需要团队医生的doctorId
export const doctorTeamLearId = ''
export const startDate = ''
export const doctorTeamLeaderId = ''
export const upDown = false
export const unitMenu = [
    {
        asideMenu: true,
        title: '基础信息管理',
        name: 'baseInfoMangement',
        path: '/baseInfoMangement',
        icon: 'book',
        children: [
            {
                asideMenu: true,
                title: '科室信息管理',
                name: 'departmentMangement',
                icon: 'save',
                path: '/baseInfoMangement/departmentMangement',
            },
            {
                asideMenu: true,
                title: '人员信息管理',
                name: 'peopleMangement',
                icon: 'user-add',
                path: '/baseInfoMangement/peopleMangement',
            },
            {
                asideMenu: true,
                title: '专家管理',
                name: 'expertMangement',
                icon: 'crown',
                path: '/baseInfoMangement/expertMangement',
            },
            {
                asideMenu: true,
                title: '团队管理',
                name: 'teamManagement',
                icon: 'team',
                path: '/baseInfoMangement/teamManagement',
            },
            {
                asideMenu: true,
                title: '团队关系管理',
                name: 'teamRelationship',
                icon: 'branches',
                path: '/baseInfoMangement/teamRelationship',
            },
        ],
    },
    {
        asideMenu: true,
        title: '双向转诊管理',
        name: 'upAndDownUnit',
        icon: 'swap',
        path: '/upAndDownUnit',
        children: [
            {
                asideMenu: true,
                title: '上转用户查询',
                name: 'upReferralUnit',
                icon: 'arrow-up',
                path: '/upAndDownUnit/managementList/0',
            },
            {
                asideMenu: true,
                title: '下转用户查询',
                icon: 'arrow-down',
                path: '/upAndDownUnit/managementList/1',
                name: 'downReferralUnit',
            },
        ],
    },

    {
        asideMenu: true,
        title: '资讯管理',
        name: 'news',
        icon: 'diff',
        path: '/news',
        children: [
            {
                asideMenu: true,
                title: '公共卫生',
                name: 'publicHealth',
                icon: 'diff',
                path: '/news/newsInfo/1',
            },
            {
                asideMenu: true,
                title: '康复指导',
                name: 'rehab',
                icon: 'diff',
                path: '/news/newsInfo/2',
            },
            {
                asideMenu: true,
                title: '通知公告',
                name: 'announcement',
                icon: 'diff',
                path: '/news/newsInfo/3',
            },
            {
                asideMenu: true,
                title: '活动通知',
                name: 'activeNotice',
                icon: 'diff',
                path: '/news/newsInfo/4',
            },
        ],
    },
    {
        asideMenu: true,
        title: '信息上报',
        name: 'infoReport',
        path: '/infoReport',
        icon: 'eye',
        children: [
            {
                asideMenu: true,
                title: '签约服务进展情况上报',
                name: 'progress_check',
                path: '/infoReport/progress_check',
                icon: 'diff',
            },
        ],
    },
    {
        asideMenu: true,
        title: '统计及明细',
        name: 'performance',
        meta: ['unit'],
        path: '/performance',
        icon: 'eye',
        children: [
            {
                asideMenu: true,
                title: '签约统计及明细',
                name: 'signingDetail',
                icon: 'eye',
                path: '/performance/signingDetail',
            },
            {
                asideMenu: true,
                title: '履约统计',
                name: 'pormise',
                icon: 'eye',
                path: '/performance/pormise',
            },
            {
                asideMenu: true,
                title: '履约明细（监测评估）',
                name: 'statistics',
                icon: 'eye',
                path: '/performance/statistics',
            },
            {
                asideMenu: true,
                title: '在签状态居民人群统计',
                name: 'ResidentStatistics',
                path: '/performance/ResidentStatistics',
            },
            {
                asideMenu: true,
                title: '在签状态居民履约统计',
                name: 'RPUCStatistics',
                path: '/performance/RPUCStatistics',
            },

            {
                asideMenu: true,
                title: '在签状态居民履约明细',
                name: 'RPUCDetailed',
                path: '/performance/RPUCDetailed',
            },
            {
                asideMenu: true,
                title: '总体履约进度',
                name: 'OCPStatistics',
                path: '/performance/OCPStatistics',
            },
            // {
            //     asideMenu: true,
            //     title: '团队服务统计',
            //     name: 'signingStatistics',
            //     icon: 'eye',
            //     path: '/performance/signingStatistics',
            // },
            // {
            //     asideMenu: true,
            //     title: '团队服务明细（监测评估）',
            //     name: 'detailed',
            //     icon: 'eye',
            //     path: '/performance/detailed',
            // },
            {
                asideMenu: true,
                title: '团队统计及明细',
                name: 'teamStatistics',
                icon: 'eye',
                path: '/performance/teamStatistics',
            },
            // {
            //     asideMenu: true,
            //     title: '签约统计（特殊人群）',
            //     name: 'year',
            //     path: '/performance/year',
            // },
            // {
            //     asideMenu: true,
            //     title: '签约统计（重点人群）',
            //     name: 'fouce',
            //     path: '/performance/fouce',
            // },

        ],
    },
]
export const doctorMenu = [
    {
        asideMenu: true,
        title: '签约管理',
        name: 'sgManage',
        icon: 'audit',
        path: '/sgManage',
        children: [
            {
                asideMenu: true,
                title: '签约信息管理',
                name: 'sgManageInfo',
                icon: 'database',
                path: '/sgManage/sgManageInfo',
            },
            {
                asideMenu: true,
                title: '续约状态管理',
                name: 'sgRenewContract',
                icon: 'file-markdown',
                path: '/sgManage/sgRenewContract',
            },
            {
                asideMenu: true,
                title: '解约信息管理',
                name: 'sgRelieve',
                icon: 'file-markdown',
                path: '/sgManage/sgRelieve',
            },
            // {
            //     asideMenu: true,
            //     title: '居民改签管理',
            //     name: 'sgChange',
            //     icon: 'file-markdown',
            //     path: '/sgManage/sgChange',
            // },
            // {
            //     asideMenu: true,
            //     title: '家庭信息管理',
            //     icon: 'home',
            //     name: 'sgManageFamilyManage',
            //     path: '/sgManage/sgManageFamilyManage',
            // },
            // {
            //     asideMenu: true,
            //     title: '无法签约人员上报',
            //     icon: 'exception',
            //     name: 'sgManageNo',
            //     path: '/sgManage/sgManageNo',
            // },
            {
                asideMenu: true,
                title: '签约历史查询',
                icon: 'search',
                name: 'sgManageHistoryManage',
                path: '/sgManage/sgManageHistoryManage',
            },
        ],
    },
    {
        asideMenu: true,
        title: '贫困人员管理',
        name: 'poorManagement',
        meta: ['doctor'],
        path: '/poorManagement',
        icon: 'exception',
        children: [
            {
                asideMenu: true,
                title: '贫困人员信息管理',
                name: 'poorManagementReport',
                meta: ['doctor'],
                icon: 'exception',
                path: '/poorManagement/poorManagementReport',
            },
        ],
    },
    {
        asideMenu: true,
        title: '居民改签管理',
        name: 'ticketChange',
        icon: '',
        path: '/ticketChange',
        children: [
            {
                asideMenu: true,
                title: '居民列表',
                icon: 'audit',
                name: 'ticketChangeAdmin',
                path: '/ticketChange/ticketChangeAdmin',
            },
        ],
    },
    {
        asideMenu: true,
        title: '双向转诊管理',
        name: 'upAndDownDoctor',
        icon: 'swap',
        path: '/upAndDownDoctor',
        children: [
            {
                asideMenu: true,
                title: '上转用户查询',
                name: 'upReferral',
                icon: 'arrow-up',
                path: '/upAndDownUnit/managementList/0',
            },
            {
                asideMenu: true,
                title: '下转用户查询',
                icon: 'arrow-down',
                name: 'downReferral',
                path: '/upAndDownUnit/managementList/1',
            },
        ],
    },

    {
        asideMenu: true,
        title: '长处方管理',
        name: 'longPrescription',
        icon: '',
        path: '/longPrescription',
        children: [
            {
                asideMenu: true,
                title: '长处方管理',
                icon: 'audit',
                name: 'longPrescriptionManage',
                path: '/ticketChange/longPrescriptionManage',
            },
        ],
    },
    {
        asideMenu: true,
        title: '血压血糖信息管理',
        name: 'BloodPressureSugar',
        icon: '',
        path: '/BloodPressureSugar',
        children: [
            {
                asideMenu: true,
                title: '血糖管理',
                icon: 'audit',
                name: 'bloodSugar',
                path: '/BloodPressureSugar/bloodSugar',
            },
            {
                asideMenu: true,
                title: '血压管理',
                icon: 'audit',
                name: 'bloodPressure',
                path: '/BloodPressureSugar/bloodPressure',
            },
        ],
    },
    {
        asideMenu: true,
        title: '资讯管理',
        name: 'news',
        icon: '',
        path: '/news',
        children: [
            {
                asideMenu: true,
                title: '公共卫生',
                name: 'publicHealth',
                icon: 'diff',
                path: '/news/newsInfo/1',
            },
            {
                asideMenu: true,
                title: '康复指导',
                name: 'rehab',
                icon: 'diff',
                path: '/news/newsInfo/2',
            },
            {
                asideMenu: true,
                title: '通知公告',
                name: 'announcement',
                icon: 'diff',
                path: '/news/newsInfo/3',
            },
            {
                asideMenu: true,
                title: '活动通知',
                name: 'activeNotice',
                icon: 'diff',
                path: '/news/newsInfo/4',
            },
        ],
    },
]
export const upDownMenu = [
    {
        asideMenu: true,
        title: '双向转诊管理',
        name: 'upAndDownDoctor',
        icon: 'swap',
        path: '/upAndDownDoctor',
        children: [
            {
                asideMenu: true,
                title: '上转用户查询',
                name: 'upReferral',
                icon: 'arrow-up',
                path: '/upAndDownUnit/managementList/0',
            },
            {
                asideMenu: true,
                title: '下转用户查询',
                icon: 'arrow-down',
                name: 'downReferral',
                path: '/upAndDownUnit/managementList/1',
            },
        ],
    },
];
//团队列表
export const teamList = []

//菜单激活的名字
export const lastActiveMenuName = ''

//签约信息管理页面数据刷新
export const sgManageRefresh = false
export const isIfrname = false
export const idcard = ''
export const idcardChange = 0
export const servieAdd = 0
export const changeisCollapse = (state) => {
    state.isCollapse = !state.isCollapse
}
export const setNewState = (state) => {
    state.newState = !state.newState
}
export const removeTableData = (state) => {
    state.tableData = []
    state.total = 0
}
export const setTableData = (state, {dataList, total = 0}) => {
    state.tableData = dataList
    state.total = total
}
export const setTableDataAll = (state, data) => {
    state.tableData = data
}
export const test = (state) => {}
export const setLoginInfo = (state, data) => {
    state.loginInfo = data
}
export const Changecollapsed = (state) => {
    state.collapsed = !state.collapsed
}
export const setenumeration = (state, data) => {
    state.enumeration = data
}
export const setModalData = (state, data) => {
    state.modalData.modalVisible = true
    state.modalData.data = data
}
export const setLoading = (state, data) => {
    state.loading = data
}
export const closeModal = (state, data) => {
    state.modalData.modalVisible = false
}
export const setPeopleInfo = (state, data) => {
    // sessionStorage.setItem('peopleInfo', JSON.stringify(data))
    if (!data.residentLabel) {
        data.arr1 = ['无']
    } else {
        data.arr1 = data.residentLabel.split('、')
    }
    data.arr2 = data.phlGroupsArray.split('、')
    state.peopleInfo = data
}
export const setPeopleInfoNew = (state, data) => {
    // sessionStorage.setItem('peopleInfo', JSON.stringify(data))

    state.peopleInfo = data
}
export const setServicePack = (state, data) => {
    state.servicePack = data
}
//设置文本内容
export const setContent = (state, data) => (state.content = data)
//设置签约信息
export const setSignAgreementInfo = (state, data) => {
    state.signAgreementInfo = data
}
export const setIdCardInfo = (state, data) => {
    //设置身份信息
    state.idCardInfo = data
}
export const setUpHeaders = (state) => {
    //设置全局上传头信息
    let cookieName = process.env.VUE_APP_COOKIE
    let token = getCookie(cookieName)
    const headers = {
        Authorization: `bearer ${token}`,
    }
    state.headers = headers
}
export const setDoctorTeamLeaderId = (state, data) => {
    // 设置团队负责人的doctorId
    state.doctorTeamLeaderId = data
}

export const setTeamList = (state, data) => {
    state.teamList = data
    sessionStorage.setItem('teamList', JSON.stringify(data))
}
export const setLastActiveMenuName = (state, data) => {
    if (!data) data = ''
    sessionStorage.setItem('lastActiveMenuName', JSON.stringify(data))
    state.lastActiveMenuName = data
}
export const removeList = (state) => {}
function getCookie(name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if ((arr = document.cookie.match(reg))) return unescape(arr[2])
    else return null
}

export const setSgManageRefresh = (state, data) => {
    state.sgManageRefresh = data
}
export const setIdcardChange = (state) => {
    state.idcardChange += 1
}
export const setservieAdd = state => {
    state.servieAdd += 1
}
export const setUpAndDown = (state, data) => {
    // state.doctorMenu = data
    // console.log(state)
}
export const setUpDownMenu = (state) => {
    state.doctorMenu = [
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

}
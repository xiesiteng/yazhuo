import {
    getTableDataAxios,
    getenumerationData,
    signedInfoId,
    loginInfo,
    servicePackAll,
    signedId,
    picturesInfoOcr,
    signedResidentsInfoByidCard,
} from '@/axios/global/index.js'
export const testAction = ({commit}) => {
    commit('test')
}
export const getLoginInfo = async ({commit}) => {
    let {data} = await loginInfo()
    commit('setLoginInfo', data)
    sessionStorage.setItem('loginInfo', JSON.stringify(data))
}
export const getTableData = async ({commit}, searchData) => {
    //设置全局表格数据
    commit('removeTableData')
    let tableDataList = await getTableDataAxios(searchData)
    commit('setTableData', tableDataList.data)
}
export const getTableDataAll = async ({commit}, searchData) => {
    //不分页对象
    let {data} = await getTableDataAxios(searchData)
    commit('setTableDataAll', data)
}
export const getenumeration = async ({commit}) => {
    //获取枚举
    if (sessionStorage.getItem('enumeration')) {
        commit(
            'setenumeration',
            JSON.parse(sessionStorage.getItem('enumeration')),
        )
    } else {
        let data = await getenumerationData()
        sessionStorage.setItem('enumeration', JSON.stringify(data.data))
        commit('setenumeration', data.data)
    }
}
export const getPeopleInfoByIdcard = async ({commit}, diCard) => {
    //获取当前人员信息
    let {data} = await signedResidentsInfoByidCard(diCard)
    commit('setPeopleInfo', data)
}
export const getPeopleInfo = async ({commit}, id) => {
    //获取当前人员信息
    let {data} = await signedInfoId(id)
    commit('setPeopleInfo', data)
}
export const getServicePack = async ({commit}) => {
    //获取服务包信息
    let {data} = await servicePackAll()
    commit('setServicePack', data)
}
export const getSignAgreementInfo = async ({commit}, id) => {
    //获取签约信息对象
    let {data} = await signedId(id)
    commit('setSignAgreementInfo', data)
}
export const getIdCardInfo = async ({commit}, id) => {
    //获取设置身份证信息
    let {data} = await picturesInfoOcr(id)
    if (data) {
        commit('setIdCardInfo', data)
    }
}

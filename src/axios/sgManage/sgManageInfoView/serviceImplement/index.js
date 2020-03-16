import axios from '@/axios/index.js'

export const deleteGw = (visitDoctorId,residentId,target,visitId) => {
    return axios({
       url: `/v1/fds-pc/service-info/delete-gw-service-info/${visitDoctorId}/${residentId}/${target}/${visitId}`,
        method: 'delete',
    })
}

//0启用;1禁用;2软删
export const deleteJQ = (id) => {
    return axios({
        url: `/v1/fds-pc/service-info/disable/${id}/2`,
        method: 'delete',
    })
}



export const typeGroundBresidentId = (residentId) => {
    return axios({
        url: `/v1/fds-pc/service-info/type-group/${residentId}`,
    })
}
export const packItemGroup = (data) => {
    return axios({
        url: `/v1/fds-pc/service-info/item-group/${data.residentId}/${data.typeId}`,
    })
}
export const getPcJumpUrl = (data) => {
    // var data = "http://192.168.0.161:9000/api/phl/pc/gateway?token=d42e1ba7-6a21-4ec9-8b36-0c7584ca8de7&target=neonatalHomeVisit&op=create&source=1&residentInfoId=7772481&teamId=100&signingDate=2019-08-13"
    // var data = "http://192.168.0.161:9000/api/phl/pc/gateway?token=d42e1ba7-6a21-4ec9-8b36-0c7584ca8de7&target=childHealth2&month=12&op=create&source=1&residentInfoId=7772481&teamId=100&signingDate=2019-08-13"
    return axios({
        url: `${data}`,
        method: 'get',
    })
}

export const getServiceInfoDetail = (data) => {
    return axios({
        url: '/v1/fds-pc/service-info',
        method: 'get',
        params: data,
    })
}
export const getexecuteUrl = (data) => {
    return axios({
        url: `/v1/fds-pc/service-info/get-execute-url/${data.signedId}/${data.residentId}/${data.itemId}`,
    })
}
export const serviceItemById = (id) => {
    return axios({
        url: `/v1/fds-pc/service-item/${id}`,
    })
}
export const serviceInfoPost = (data) => {
    return axios({
        url: '/v1/fds-pc/service-info',
        method: 'post',
        data,
    })
}
export const serviceInfoPut = (data) => {
    return axios({
        url: `/v1/fds-pc/service-info/${data.id}`,
        method: 'put',
        data,
    })
}
export const getItemBySignId = (signId, isGw) => {
    return axios({
        url: `/v1/fds-pc/service-info/service-execute-detail/${signId}/${isGw}`,
    })
}
export const executionTimecontrol = () => {
    return axios({
        url: '/v1/fds-pc/service-info/execution-time-control',
    })
}

import axios from '@/axios/index.js'

/**
 * 单位版/行政版-主键查询上报记录详情
 * @param {*} id
 */
export const reportRecordDetail = (id) => {
    return axios({
        url: `/v1/fds-pc/signed-service-report-work/${id}`,
    })
}

/**
 * 行政版-分页查询下属单位签约服务进展工作汇报记录
 * @param {*} data
 */
export const reportRecordList = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-service-report-work/unit-reports`,
        method: 'get',
        params: data,
    })
}

/**
 * 1.02 单位版-新增签约服务进展工作汇报
 * @param {*} data
 */
export const reportRecordAdd = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-service-report-work`,
        method: 'post',
        data: data,
    })
}

/**
 * 单位版-修改汇报记录
 * @param {*} id
 * @param {*} data
 */
export const reportRecordEdit = (id, data) => {
    return axios({
        url: `/v1/fds-pc/signed-service-report-work/${id}`,
        method: 'put',
        data: data,
    })
}

/**
 * 单位版-检查是否可以新增X年X月的报表
 * @param data
 */
export const monthAlready = (data) => {
    return axios({
        url: `/v1/fds-pc/signed-service-report-work/check-insert/${data.reportYear}/${data.reportMonth}`,
        method: 'get',
        params: data,
    })
}

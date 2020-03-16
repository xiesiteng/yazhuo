import moment from 'moment'
export const timestampToTime = function (timestamp) {
    //将long类型时间戳转换为date时间表示
    var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-' //此时为四位数字表示 getYear()的话为两位数字表示
    let M =
        (date.getMonth() + 1 < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1) + '-' //当前月份(0-11,0代表1月)
    let D = date.getDate() + ' ' //当前日(1-31)
    let h = date.getHours() + ':'
    let m =
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':'
    let s = date.getSeconds() + ':'
    let ms = date.getMilliseconds() //毫秒值
    return Y + M + D + h + m + ms //此处可以自定义需要的显示类型
}
export const numberTest = function (number, min, max, limit) {
    let regNum
    let str = '出错了'
    switch (limit) {
        case 0:
            //限制整数
            regNum = /^\d+$/
            str = `只能大于${min}小于${max}的整数`
            break
        case 1:
            //限制一位小数
            regNum = /^\d+(\.\d{1,1})?$/
            str = `只能大于${min}小于${max}的整数，小数点后一位`
            break
        default:
            //限制两位小数
            regNum = /^\d+(\.\d{1,2})?$/
            str = `只能大于${min}小于${max}的整数，小数点后两位`
            break
    }
    let rule1 = regNum.test(number)
    let rule2 = number < min || number > max
    if (rule1 && !rule2) {
        return true
    } else {
        return str
    }
}
export const addressCodeLevel = function (str) {
    let adderssInfo = {
        //1 省 2 市 3区 //4 乡 //5 村
        level: 1,
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        address5: '',
    }
    //计算地址
    adderssInfo.level = 0
    adderssInfo.address1 = str.slice(0, 2) //省份
    adderssInfo.address2 = str.slice(2, 4) //市
    adderssInfo.address3 = str.slice(4, 6) //区
    adderssInfo.address4 = str.slice(6, 9) //乡
    adderssInfo.address5 = str.slice(9, 12) //村
    if (str == '') {
        adderssInfo.level = -1
    }
    if (adderssInfo.address2 != '00') {
        //有镇
        adderssInfo.level = 2
    }
    if (adderssInfo.address3 != '00') {
        //有镇
        adderssInfo.level = 3
    }
    if (adderssInfo.address4 != '000') {
        //有镇
        adderssInfo.level = 4
    }
    if (adderssInfo.address5 != '000') {
        //有村
        adderssInfo.level = 5
    }
    switch (adderssInfo.level) {
        case 3: // 省 市 区
            adderssInfo.address1 = `${str.slice(0, 2)}`
            adderssInfo.address2 = `${str.slice(0, 4)}00000000`
            adderssInfo.address3 = `${str.slice(0, 6)}000000`
            adderssInfo.address4 = ``
            adderssInfo.address5 = ``
            break
        case 4: // 省 市7 区 //镇
            adderssInfo.address1 = `${str.slice(0, 2)}`
            adderssInfo.address2 = `${str.slice(0, 4)}00000000`
            adderssInfo.address3 = `${str.slice(0, 6)}000000`
            adderssInfo.address4 = `${str.slice(0, 9)}000`
            adderssInfo.address5 = ``
            break
        case 5: //省 市 区 镇 村
            adderssInfo.address1 = `${str.slice(0, 2)}`
            adderssInfo.address2 = `${str.slice(0, 4)}00000000`
            adderssInfo.address3 = `${str.slice(0, 6)}000000`
            adderssInfo.address4 = `${str.slice(0, 9)}000`
            adderssInfo.address5 = `${str}`
            break
        default:
            break
    }
    return adderssInfo
}
export const getArray = function (string) {
    if (string) {
        if (string.length == 1) {
            return string.split().map((e) => {
                return e - 0
            })
        } else {
            return string.split(',').map((e) => {
                return e - 0
            })
        }
    } else {
        return []
    }
}
export const getString = function (arr, way = ',') {
    if (arr && arr.length >= 1) {
        return arr.join(way)
    } else {
        return ''
    }
}
export const disabledDate = function (current) {
    return current && current > moment().endOf('day')
}
export const disabledDateDay = function (current) {
    return (
        (current && current > moment().endOf('day')) ||
        current < moment().subtract(31, 'days')
    )
}
export const getDate = function (date) {
    if (date) {
        return moment(date, 'YYYY-MM-DD')
    } else {
        return ''
    }
}

export const nowTime = function () {
    return moment()
        .locale('zh-cn')
        .format('YYYY-MM-DD HH:mm:ss')
}
export const oneMonth = function (current) {
    let startDay = moment().subtract(7, 'days')
    let endDay = moment().endOf('day')
    console.log(current < startDay || current > endDay)
    if (current < startDay) {
        return true
    } else {
        return false
    }
}
export const defaultDate = moment('2015-06-06', 'YYYY-MM-DD')

export const getCookie = function (name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if ((arr = document.cookie.match(reg))) return unescape(arr[2])
    else return null
}

// 根据人群值获取人群展示的标签信息
export const getGroupInfoFilter = function (groupValue) {
    let groupInfo = {
        一: {
            id: '81',
            tagName: '一',
            color: '#8543e0',
            background: '#e3edfb',
            enumName: '一般人',
            enumValue: '4096',
        },
        普: {
            id: '82',
            tagName: '普',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '普通居民',
            enumValue: '1',
        },
        儿: {
            id: '83',
            tagName: '儿',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '0-6岁儿童',
            enumValue: '2',
        },
        孕: {
            id: '84',
            tagName: '孕',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '孕产妇',
            enumValue: '4',
        },
        老: {
            id: '85',
            tagName: '老',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '65岁以上老人',
            enumValue: '8',
        },
        高: {
            id: '86',
            tagName: '高',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '高血压患者',
            enumValue: '16',
        },
        糖: {
            id: '87',
            tagName: '糖',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '2型糖尿病患者',
            enumValue: '32',
        },
        精: {
            id: '88',
            tagName: '精',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '严重精神障碍者',
            enumValue: '64',
        },
        肺: {
            id: '89',
            tagName: '肺',
            color: '#2fc25b',
            background: '#f6ffed',
            enumName: '肺结核病患者',
            enumValue: '128',
        },
        残: {
            id: '90',
            tagName: '残',
            color: '#8543e0',
            background: '#e3edfb',
            enumName: '残疾人',
            enumValue: '128',
        },
        计: {
            id: '91',
            tagName: '计',
            color: '#8543e0',
            background: '#e3edfb',
            enumName: '计划生育特殊家庭成员',
            enumValue: '128',
        },
        五: {
            id: '92',
            tagName: '五',
            color: '#8543e0',
            background: '#e3edfb',
            enumName: '城乡低保五保户对象',
            enumValue: '128',
        },
        贫: {
            id: '93',
            tagName: '贫',
            color: '#8543e0',
            background: '#e3edfb',
            enumName: '建档立卡贫困人员',
            enumValue: '128',
        },
        null: {
            //处理app端 返回null字段,则不显示(白色)
            id: '',
            tagName: '',
            color: '#ffffff',
            background: 'rgba(105,222,135,0)',
            enumName: '',
            enumValue: '',
        },
    }
    return groupInfo[groupValue] || null
}
//获取血压血糖人群展示的标签信息
export const getSugarAndPressureInfoFilter = function (heartRateStatusInt) {
    let style = {
        position: 'absolute',
        left: '-15px',
        top: '5px',
    }
    let color = ''
    // 血糖   0=正常     1=偏高    -1=偏低     -2=无数据
    // 血压   0=心率正常 1=心率过速 -1=心率过缓 -2=无数据
    switch (heartRateStatusInt) {
        case '0':
        case '理想血压':
        case '正常血压':
        case '正常高值':
            color = '#52C41A'
            break
        case '1':
        case '一级高血压':
        case '二级高血压':
        case '三级高血压':
            color = '#F5222D'
            break
        case '-1':
        case '低血压':
        case '单纯收缩性高血压':
            color = '#1890FF'
            break
        case '-2':
        case '无测量记录':
            color = '#898B8C'
            break
        default:
            color = '#666666'
            break
    }
    style.color = color
    style.background = color
    return style
}
export const clearAllCookie = function () {
    var date = new Date()
    date.setTime(date.getTime() - 10000)
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    console.log('需要删除的cookie名字：' + keys)
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie =
                keys[i] +
                '=0; expire=' +
                date.toGMTString() +
                '; domain=.yiboshi.com;path=/'
    }
}
export const numberToString = function (params) {
    if (typeof params !== 'object' && typeof params == 'number') {
        return params.toString()
    } else {
        return
    }
}
export const getDetailList = function (arr, list) {
    let result = []
    arr.fooEach((i) => {
        result.push(list.find((e) => e.enumValue == i).enumName)
    })
    return result
}
export const filterGroup = function (arr) {
    let tmp = ['2', '4', '8', '16', '32', '64', '128']
    let flag = false
    arr.forEach(e => {
        if (tmp.includes(e)) {
            flag = true
        }
    })
    if (!arr.includes('1') && !flag) {
        arr.push('1')
    }
    return getString(arr)
}
export const findObj = function (arr, id) {
    if (arr.find(e => e.areaCode == id)) {
        return arr.find(e => e.areaCode == id)
    }
}
export const addressInfoToArray = function (str) {
    if (!str) {
        return []
    }
    if (str.length == 2) {
        return [str]
    }
    let level
    let adderssInfo = {
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        address5: '',
    }
    //计算地址
    level = 1
    adderssInfo.address1 = str.slice(0, 2) //省份
    adderssInfo.address2 = str.slice(2, 4) //市
    adderssInfo.address3 = str.slice(4, 6) //区
    adderssInfo.address4 = str.slice(6, 9) //乡
    adderssInfo.address5 = str.slice(9, 12) //村
    if (adderssInfo.address2 != '00') {
        level = 2
    }
    if (adderssInfo.address3 != '00') {
        level = 3
    }
    if (adderssInfo.address4 != '000') {
        level = 4
    }
    if (adderssInfo.address5 != '000') {
        level = 5
    }
    switch (level) {
        case 2:
            return [`${str.slice(0, 2)}`, `${str.slice(0, 4)}00000000`]
        case 3:
            return [`${str.slice(0, 2)}`, `${str.slice(0, 4)}00000000`, `${str.slice(0, 6)}000000`]
        case 4:
            return [`${str.slice(0, 2)}`, `${str.slice(0, 4)}00000000`, `${str.slice(0, 6)}000000`, `${str.slice(0, 9)}000`]
        case 5:
            return [`${str.slice(0, 2)}`, `${str.slice(0, 4)}00000000`, `${str.slice(0, 6)}000000`, `${str.slice(0, 9)}000`, `${str}`]
        default:
            break;
    }
}
export const returnNowTime = function () {
    let now = new Date()
    let hour = now.getHours()
    let nowTime = ''
    if (hour < 6) {
        nowTime = '凌晨好,祝你开心每一天！'
    } else if (hour < 12) {
        nowTime = '上午好，祝你开心每一天！'
    } else if (hour < 14) {
        nowTime = '中午好，祝你开心每一天！'
    } else if (hour < 17) {
        nowTime = '下午好，祝你开心每一天！'
    } else if (hour < 22) {
        nowTime = '晚上好，祝你开心每一天！'
    } else {
        nowTime = '夜深了，祝你开心每一天！'
    }
    return nowTime
}

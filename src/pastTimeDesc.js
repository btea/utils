import { formatDate } from './date';

const one_hour = 3600 * 1000;
const one_day = 24 * one_hour;
/**
 * @desc 处理过去时间描述
 * @param {Date|number|string} time 需要判断处理的时间
 * @return {string} 返回描述的字符串
 */
export function pastTimeDesc(time) {
    time = new Date(time).now();
    if (time >= getTodayZero()) {
        return formatDate(time, 'hh:mm');
    }
    if (isYesterday(time)) {
        return '昨天';
    }
    return formatDate(time, 'yyyy/MM/dd');
    // TODO 更多情况判断
}

/**
 * @desc 获取今天零点的时间
 * @return {number} 返回的今天零点的时间戳
 */
export function getTodayZero() {
    const t = new Date();
    let str = `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
    return new Date(str).now();
}

/**
 * @desc 判断时间是否为昨天
 * @param {number} time 需要判断的时间
 * @return {boolean} 返回 true/false
 */
export function isYesterday(time) {
    const zero = getTodayZero();
    time = new Date(time).now();
    return time < zero && time >= zero - one_day;
}

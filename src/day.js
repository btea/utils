import { isValidTime } from './validate';
/**
 * @desc 获取指定日期是当年的第几天，第几周
 * @param {unknown} time 需要取值的时间
 * @param {string} type 指定需返回数值代表的意义
 * @return {number} 返回指定事件的天数或者周数，若为无效时间则返回 -1
 */

export function getTimeNum(time, type) {
    if (!isValidTime(time)) {
        return -1;
    }
    time = new Date(time);
    const one_day = 864e5;
    const year = time.getFullYear();
    const start = new Date(year, 0);
    if (type === 'day') {
        const num = (time.getTime() - start.getTime()) / one_day;
        if (/\./.test(num)) {
            return Math.ceil(num);
        }
        return num + 1; // 刚好新的一天零点也是新的一天
    }
    if (type === 'week') {
        const day = start.getDay();
        const offset = day === 0 ? 1 : 7 - day + 1;
        let num = (time.getTime() - start.getTime() + 1) / one_day;
        if (num <= offset) {
            return 1;
        }
        num -= offset;
        return Math.ceil(num / 7) + 1;
    }
    return -1;
}

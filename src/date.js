import { isValidYear, isValidMonth } from './validate';
import { padString } from './padString';
/**
 * @desc 判断一个年份是否是闰年
 * @param {string| number} year 需要判断的年份
 * @return {Boolean} true/false
 */
export function isLeapyear(year) {
    if (!year) {
        console.log('请输入年份');
        return false;
    }
    year = String(year).trim();
    if (!isValidYear(year)) {
        console.log('参数' + year + '并不是一个有效的年份');
        return false;
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @desc 通过年月获取指定的月份的总天数
 * @param {string|number} year 指定的年份
 * @param {string|number} month 指定的月份
 * @return {number} 返回的天数,参数无效返回-1
 */
export function getMonthTotal(year, month) {
    if (!year) {
        console.log('请输入年份');
        return -1;
    }
    if (!month) {
        console.log('请输入月份');
        return -1;
    }
    if (!isValidYear(year)) {
        console.log('参数' + year + '并不是一个有效的年份');
        return -1;
    }
    if (!isValidMonth(month)) {
        console.log('参数' + month + '并不是一个有效的月份');
        return -1;
    }
    return new Date(year, month, 0).getDate();
}

/**
 * @desc 格式化时间
 * @param {Date} date 需要格式化的时间
 * @param {String} format 需要转换的格式
 * @return {String} 转化后的字符串,失败则返回空字符串''
 */
export function formatDate(date, format) {
    date = new Date(date);
    if (date.toString() === 'Invalid Date') {
        console.log('请输入有效的时间');
        return '';
    }
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    format = format.replace(/y+/, y);
    const list = {
        'M+': M,
        'd+': d,
        'h+': h,
        'm+': m,
        's+': s
    };
    Object.keys(list).forEach(k => {
        const reg = new RegExp(k);
        format = format.replace(reg, padString(list[k], 2, '0'));
    });
    return format;
}

import { isValidYear, isValidMonth } from './validate';
/**
 * @desc 判断一个年份是否是闰年
 * @params year {string| number} 需要判断的年份
 * @return {Boolean} true/false
 */
export function isLeapyear(year) {
    if (!year) {
        console.log('请输入年份');
        return;
    }
    year = String(year).trim();
    if (!isValidYear(year)) {
        console.log('参数' + year + '并不是一个有效的年份');
        return;
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @desc 通过年月获取指定的月份的总天数
 * @params {string|number} year 指定的年份
 * @params {string|number} month 指定的月份
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
        console.log('参数' + month + '并不是一个有的月份');
        return -1;
    }
    return new Date(year, month, 0).getDate();
}

/**
 * @desc 格式化时间
 * @params {date} date 需要格式化的时间
 * @params {string} format 需要转换的格式
 * @return {string} 转化后的字符串,失败则返回空字符串''
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
    format = format.replace(/M+/, ('0' + M).slice(-2));
    format = format.replace(/d+/, ('0' + d).slice(-2));
    format = format.replace(/h+/, ('0' + h).slice(-2));
    format = format.replace(/m+/, ('0' + m).slice(-2));
    format = format.replace(/s+/, ('0' + s).slice(-2));
    return format;
}

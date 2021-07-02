/**
 * @desc 判断输入的年份是否为一个有效值
 * @param {string| number} v 需要判断的年份
 * @return {boolean} true/false
 */
export function isValidYear(v) {
    v = String(v);
    return /^\d{4}$/.test(v.trim());
}

/**
 * @desc 判断输入的月份是否为一个有效值
 * @param {string| number} v 需要判断的年份
 * @return {boolean} true/false
 * @desc 补充：默认年份从1开始
 */
export function isValidMonth(v) {
    v = Number(v);
    if (v !== v) {
        return false;
    }
    if (v < 1 || v > 12) {
        return false;
    }
    return /^\d{1,2}$/.test(v);
}

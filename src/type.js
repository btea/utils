/**
 * @desc 判断一个参数是否为字符串
 * @param {string|number|object|null...} val 传入的参数
 * @return {boolean} 返回是或否
 */
export function isString(val) {
    return getType(val) === 'string';
}

/**
 * @desc 判断一个参数是否为数字
 * @param {string|number...} val 传入的参数
 */
export function isNumber(val) {
    const type = getType(val);
    return type === 'number' || type === 'bigint';
}

/**
 * @desc 返回传入的参数的类型
 * @param {string|number...} val 传入的参数
 * @return {string} 传入的参数返回的类型字符串
 */
export function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

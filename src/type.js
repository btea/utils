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
 * @return {boolean}
 */
export function isNumber(val) {
    const type = getType(val);
    return type === 'number' || type === 'bigint';
}

/**
 * @desc 判断一个参数是否为数组
 * @param {any} val 传入的参数
 * @return {boolean}
 */
export function isArray(val) {
    if (Array.isArray) {
        return Array.isArray(val);
    }
    return getType(val) === 'array';
}

/**
 * @desc 判断一个参数是否为对象
 * @param {any} val 传入的参数
 * @return {boolean}
 */
export function isObject(val) {
    return getType(val) === 'object';
}

/**
 * @desc 判断一个参数是否为真值
 * @param {any} val 传入的参数
 * @return {boolean}
 */
export function isTruly(val) {
    return !!val;
}

/**
 * @desc 返回传入的参数的类型
 * @param {string|number...} val 传入的参数
 * @return {string} 传入的参数返回的类型字符串
 */
export function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

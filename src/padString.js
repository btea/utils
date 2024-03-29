/**
 * @desc 对字符串前面或后面进行指定数量字符进行填充
 * @param {string | number} str 需要进行填充的字符串
 * @param {number} len 将字符串填充到的指定长度
 * @param {string} char 用来填充的字符
 * @param {string} pos 填充的位置，前方还是后方
 * @returns {string} 返回填充后的字符串
 */

export function padString(str, len, char = ' ', pos = 'start') {
    if (typeof str !== 'string') {
        str = str + '';
    }
    if (str.length >= len) {
        return str;
    }
    if (str.padStart) {
        if (pos === 'start') {
            return str.padStart(len, char);
        }
        return str.padEnd(len, char);
    }
    if (pos === 'start') {
        str = char.repeat(len) + str;
        return str.slice(-len)
    }
    str += char.repeat(len);
    return str.slice(0, len);
}

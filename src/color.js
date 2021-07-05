/**
 * @desc 生成随机颜色
 * @return {string} 返回一个16进制的颜色字符串
 */
export function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

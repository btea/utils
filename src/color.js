/**
 * @desc 生成随机颜色
 * @param {string} format 颜色格式，支持 'hex' 和 'rgb'，默认为 'hex'
 * @return {string} 返回一个16进制的颜色字符串或者RGB颜色字符串
 */
export function randomColor(format = 'hex') {
    if (format === 'rgb') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    return '#' + Math.random().toString(16).slice(2, 8);
}

export function hslColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
}
import { isNumber } from './type';
/**
 * @desc 生成指定范围的随机数
 * @param {number} max 范围区间最大数,返回的随机数不包含
 * @param {number} min 范围区间最小数，返回的随机数包含
 * @param {boolean} isInteger 是否返回整数
 * @return {number} 生成的随机数
 */
export function randomNum(max, min, isInteger) {
    if (isNumber(max)) {
        console.log(`输入的参数 ${max} 不是一个数字`);
        return NaN;
    }
    if (isNumber(min)) {
        console.log(`输入的参数 ${min} 不是一个数字`);
        return NaN;
    }
    if (max <= min) {
        console.log(`输入的区间范围 max: ${max} 应该大于 min: ${min}`);
        return NaN;
    }
    const v = Math.random() * (max - min) + min;
    if (isInteger) {
        return Math.floor(v);
    }
    return v;
}

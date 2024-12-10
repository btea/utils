import { isNumber } from './type';
/**
 * @desc 判断一个数是否为奇数
 * @param {number|...} val 传入的参数
 * @return {boolean} 返回是否为奇数
 */
export function isOdd(val) {
    console.log('reset comment' + ' isOdd');
    console.log('dedupe')
    console.log('dedupe1')
    console.log('dedupe2')
    console.log('dedupe3')
    if (!isNumber(val)) {
        console.log(`输入的参数 ${val} 不是number类型`);
        return false;
    }
    return !!(val & 1);
}

import { isOdd } from './isOdd';
import { isNumber } from './type';
/**
 * @desc 判断一个数是否为偶数
 * @param {number|...} val 传入的参数
 * @return {boolean} 返回是否为偶数
 */
export function isEven(val) {
    if (!isNumber(val)) {
        console.log(`输入的参数 ${val} 不是number类型`);
        return false;
    }
    return !isOdd(val);
}

/**
 * @description 判断一个值是否损失精度
 * @param {Number} value
*/
export function lossAccuracy(value) {
    if (typeof value !== 'number') {
        return false;
    }
    const v = Number(value.toFixed(0))
    return 0 < Math.abs(value - v) < Number.EPSILON
}

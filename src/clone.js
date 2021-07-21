/**
 * @desc 对引用类型进行克隆
 * @param {object|array} obj 需要被克隆的参数（对于函数，map，set等特殊结果不做处理）
 * @param {WeakMap} map 用来过滤循环引用
 *
 * @note 参考 https://juejin.cn/post/6855129007852093453
 */
export function deepClone(obj, map = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);

    if (obj == null || typeof obj != 'object') return obj;
    if (map.has(obj)) {
        return map.get(obj);
    }
    const target = new obj.constructor();
    map.set(obj, target);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            target[key] = deepClone(obj[key], map);
        }
    }
    return target;
}

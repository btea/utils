import { equal } from 'assert';
import { isOdd } from '../src/isOdd';
describe('判断一个数是否为奇数', function () {
    it('1是一个奇数', function () {
        equal(isOdd(1), true);
    });
    it('2不是一个奇数', function () {
        equal(isOdd(2), false);
    });
});

import { equal } from 'assert';
import { isEven } from '../src/isEven';
describe('判断一个数是否为偶数', function () {
    it('1不是一个偶数', function () {
        equal(isEven(1), false);
    });
    it('2是一个偶数', function () {
        equal(isEven(2), true);
    });
    it('"2"不是一个偶数', function () {
        equal(isEven('2'), false);
    });
});

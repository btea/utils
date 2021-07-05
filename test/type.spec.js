import { isString, isNumber } from '../src/type';
import { equal } from 'assert';

describe('判断是否为字符串isString', function () {
    it('"a"是一个字符串', function () {
        equal(isString('a'), true);
    });
    it('10不是一个字符串', function () {
        equal(isString(10), false);
    });
    it('[]不是一个字符串', function () {
        equal(isString([]), false);
    });
});
describe('判断是否为数字isNumber', function () {
    it('"a"不是一个数字', function () {
        equal(isNumber('a'), false);
    });
    it('10是一个数字', function () {
        equal(isNumber(10), true);
    });
    it('10n是一个数字', function () {
        equal(isNumber(10n), true);
    });
    it('[]不是一个数字', function () {
        equal(isString([]), false);
    });
});

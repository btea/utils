import { isString, isNumber, isArray, isObject, isTruly, getType } from '../src/type';
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
describe('判断是否为数组isArray', function () {
    it('"a"不是一个数组', function () {
        equal(isArray('a'), false);
    });
    it('[]是一个数组', function () {
        equal(isArray([]), true);
    });
});
describe('判断是否为对象isObject', function () {
    it('null不是一个对象', function () {
        equal(isObject(null), false);
    });
    it('{}是一个对象', function () {
        equal(isObject({}), true);
    });
});
describe('判断是否为真值isTruly', function () {
    it('null是一个假值', function () {
        equal(isTruly(null), false);
    });
    it('{}是一个真值', function () {
        equal(isTruly({}), true);
    });
    it('[]是一个真值', function () {
        equal(isTruly([]), true);
    });
    it('"a"是一个真值', function () {
        equal(isTruly('a'), true);
    });
    it('0是一个假值', function () {
        equal(isTruly(0), false);
    });
});

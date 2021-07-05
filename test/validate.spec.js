import { isValidYear, isValidMonth } from '../src/validate';
import { equal } from 'assert';

describe('判断年份是否有效', function () {
    it('20211不是一个有效的年份', function () {
        equal(isValidYear('20211'), false);
    });
    it('1111是一个有效的年份', function () {
        equal(isValidYear('1111'), true);
    });
    it('2021是一个有效的年份', function () {
        equal(isValidYear(2021), true);
    });
});

describe('判断月份是否有效', function () {
    it('12是一个有效的月份', function () {
        equal(isValidMonth(12), true);
    });
    it('09是一个有效的月份', function () {
        equal(isValidMonth('09'), true);
    });
    it('00不是一个有效的年份', function () {
        equal(isValidMonth('00'), false);
    });
    it('13不是一个有效的年份', function () {
        equal(isValidMonth('13'), false);
    });
    it('080不是一个有效的年份', function () {
        equal(isValidMonth('080'), false);
    });
    it('81不是一个有效的年份', function () {
        equal(isValidMonth('81'), false);
    });
});

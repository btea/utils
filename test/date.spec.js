import { equal } from 'assert';
import { getMonthTotal, isLeapyear, formatDate } from '../src/date';
describe('获取指定月份天数getMonthTotal', () => {
    it('2020年2月天数29', () => {
        equal(getMonthTotal(2020, 2), 29);
    });
    it('2021年2月天数28', () => {
        equal(getMonthTotal(2021, 2), 28);
    });
    it('没有输入year', () => {
        equal(getMonthTotal(), -1);
    });
    it('没有输入month', () => {
        equal(getMonthTotal(2021), -1);
    });
    it('abc并不是一个有效的年份', () => {
        equal(getMonthTotal('abc', 1), -1);
    });
    it('12345并不是一个有效的年份', () => {
        equal(getMonthTotal(12345, 1), -1);
    });
    it('a并不是一个有效的月份', () => {
        equal(getMonthTotal(2021, 'a'), -1);
    });
    it('1.1并不是一个有效的月份', () => {
        equal(getMonthTotal(2021, 1.1), -1);
    });
    it('13并不是一个有效的月份', () => {
        equal(getMonthTotal(2021, 13), -1);
    });
});

describe('判断指定年份是否为闰年isLeapyear', () => {
    it('2020年是闰年', () => {
        equal(isLeapyear(2020), true);
    });
    it('2021年是平年', () => {
        equal(isLeapyear(2021), false);
    });
    it('2019年是平年', () => {
        equal(isLeapyear(2019), false);
    });
    it('若没有输入值返回false', () => {
        equal(isLeapyear(), false);
    });
    it('11111不是一个有效的年份', () => {
        equal(isLeapyear(11111), false);
    });
});

describe('格式化时间formatDate', () => {
    it('undefined为一个无效的时间格式', () => {
        equal(formatDate(undefined), '');
    });
    it('当前时间返回正确的格式', () => {
        var date = new Date();
        var year = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m >= 10 ? m : '0' + m;
        var d = date.getDate();
        d = d >= 10 ? d : '0' + d;
        equal(formatDate(date, 'yyyy-MM-dd'), `${year}-${m}-${d}`);
        equal(formatDate(date, 'yyyy/MM/dd'), `${year}/${m}/${d}`);
        equal(formatDate(date, 'yyyy:MM:dd'), `${year}:${m}:${d}`);
    });
});

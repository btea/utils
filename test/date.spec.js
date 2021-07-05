import { equal } from 'assert';
import { getMonthTotal, isLeapyear } from '../src/date';
describe('获取指定月份天数getMonthTotal', () => {
    it('2020年2月天数29', () => {
        equal(getMonthTotal(2020, 2), 29);
    });
    it('2021年2月天数28', () => {
        equal(getMonthTotal(2021, 2), 28);
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
});

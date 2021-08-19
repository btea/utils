import { getTimeNum } from '../src/day';
import { equal } from 'assert';

describe('获取指定时间为当年的第几天或者第几周', () => {
    it('""空字符串是一个无效值', () => {
        equal(getTimeNum(''), -1);
    });
    it('2021/8/19是2021年第231天', () => {
        equal(getTimeNum(new Date('2021-8-19'), 'day'), 231);
    });
    it('2021/8/19 01:00:00是2021年第231天', () => {
        equal(getTimeNum(new Date('2021-8-19 01:00:00'), 'day'), 231);
    });
    it('2021/1/4是2021年第2周', () => {
        equal(getTimeNum(new Date('2021-1-4'), 'week'), 2);
    });
    // it('2021/1/3是2021年第1周', () => {
    //     equal(getTimeNum(new Date('2021-1-4'), 'week'), 1);
    // });
});

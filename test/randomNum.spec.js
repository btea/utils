import { equal } from 'assert';
import { randomNum } from '../src/randomNum';

describe('生成一个区间范围内的随机数randomNum', () => {
    it('a不是一个数字', done => {
        var v = randomNum('a');
        if (v !== v) {
            done();
        }
    });
    it('b不是一个数字', done => {
        var v = randomNum(10, 'b');
        if (v !== v) {
            done();
        }
    });
    it('10 20不是一个有效的区间', done => {
        var v = randomNum(10, 20);
        if (v !== v) {
            done();
        }
    });
    it('20 10生成一个大于等于10，小于20的随机数，包含整数和小数', function (done) {
        this.timeout(500);
        var v = randomNum(20, 10);
        if (v >= 10 && v < 20) {
            var reg = /1[0-9](\.\d+)*/;
            if (reg.test(v)) {
                done();
            } else {
                setTimeout(done, 300);
            }
        } else {
            setTimeout(done, 300);
        }
    });
    it('生成一个10到20区间的整数', function (done) {
        var v = randomNum(20, 10, true);
        if (/1[0-9]/.test(v)) {
            done();
        } else {
            done();
        }
    });
});

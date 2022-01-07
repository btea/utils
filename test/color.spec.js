import { randomColor } from '../src/color';
import { describe, it, assert } from 'vitest';

const { equal } = assert;
describe('生成随机颜色randomColor', function () {
    it('生成随机16进制的颜色', function () {
        const reg = /^#[0-f]{6}$/;
        const val = randomColor();
        equal(reg.test(val), true);
    });
});

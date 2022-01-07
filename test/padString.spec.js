import { padString } from '../src/padString';
import { describe, it, assert } from 'vitest';

const { equal } = assert;

describe('对字符串进行指定长度的填充', () => {
    it('"1"字符串用"*"填充到6个字符串', () => {
        equal(padString('1', 6, '*'), '*****1');
    });
    it('"1"字符串用"*"填充到6个字符串，从字符串结尾开始填充', () => {
        equal(padString('1', 6, '*', 'end'), '1*****');
    });
    it('"12345"用"0"填充到5个字符串', () => {
        equal(padString('12345', 5, '0'), '12345');
    });
});

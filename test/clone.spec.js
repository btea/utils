import { deepClone } from '../src/clone';
import { describe, it, assert, expect } from 'vitest';

const { equal } = assert;

describe('深度克隆一个对象或者数组', () => {
    let obj = {
        name: 'z',
        age: 18,
        skill: ['speak', 'song'],
        date: new Date(),
        rgp: new RegExp()
    };
    let arr = ['one', 'two', { name: 'three' }];
    it('克隆对象obj', () => {
        const _obj = deepClone(obj);
        expect(_obj).toEqual(obj);
        expect(_obj).not.toBe(obj);
    });
    it('克隆数组arr', () => {
        const _arr = deepClone(arr);
        expect(arr).toEqual(_arr);
    });
    it('循环对象', () => {
        const o = {cir: obj}
        obj.newKey = o
        const _o = deepClone(o)
        expect(_o.cir).toEqual(o.cir)
    })
});

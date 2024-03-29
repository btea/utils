import _ from 'lodash';
import { deepClone } from '../src/clone';
import { describe, it, assert } from 'vitest';

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
        const isEqual = _.isEqual(_obj, obj);
        const notEqual = _obj !== obj;
        equal(isEqual, true);
        equal(notEqual, true);
    });
    it('克隆数组arr', () => {
        const _arr = deepClone(arr);
        const isEqual = _.isEqual(_arr, arr);
        const notEqual = _arr !== arr;
        equal(isEqual, true);
        equal(notEqual, true);
    });
    it('循环对象', () => {
        const o = {cir: obj}
        obj.newKey = o
        const _o = deepClone(o)
        equal(_.isEqual(_o, o), true)
    })
});

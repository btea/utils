# 说明

common tool functions

# 安装使用

### npm 安装:

```npm
npm i @btea/utils
```

### 使用

```js
import { isLeapYear } from '@btea/utils';
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
```

### 使用 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@btea/utils/out.cjs.js"></script>
<script type="text/javascript">
    const formatDate = zys.formatDate;
</script>
```

### 使用 unpkg CDN:

```html
<script src="https://www.unpkg.com/@btea/utils/out.cjs.js"></script>
<script type="text/javascript">
    const formatDate = zys.formatDate;
</script>
```

### API

#### isLeapYear(year: numer | string)

_判断某一年是否为闰年_

#### getMonthTotal(year: number | string, month: number | string)

_获取指定月份的总天数_

#### formatDate(date: Date, format: string)

_格式化时间_

```js
// 栗子
formatDate(new Date(2022, 1, 1, 10, 10, 10), 'yyyy年MM月dd日 hh时mm分ss秒'); // 2022年01月01日 10时10分10秒
```

#### getTimeNum(time: unknown, type: 'day' | 'week')

_获取指定时间是当年的第几天(周)_

```js
getTimeNum(new Date(2022, 1, 1), 'day'); // 2022年2月第32天
getTimeNum(new Date(2022, 1, 1), 'week'); //  2022年2月第6周
```

#### randomColor()

_随机生成一个 6 位 16 进制的有效颜色_

#### isEven(n: number)

_判断一个数是否为偶数_

#### isOdd(n: number)

_判断一个数是否为奇数_

#### randomNum(max: number, min: number, isInteger: boolen)

_根据区间生成一个随机数, 根据第三个参数 isInteger 判断是否取整_

#### isString(v: unknown)

_判断是否为字符串_

#### isNumber(v: unknown)

_判断是否为数字_

#### isArray(v: unknown)

_判断是否为数组_

#### isObject(v: unknown)

_判断是否为对象_

#### isTruly(v: unknown)

_判断是否为真值_

#### getType(v: unknown)

_获取参数的数据类型_

```js
getType({}) // 'object'
getType([]) // 'array'
...
```

#### deepClone(v: unknown)

_克隆_

#### padString(s: number | string, len: number, char: string, pos: 'start' | 'end')

_将目标数字或字符串用特定字符填充到指定的长度_


> [browser vs module vs main](https://www.cnblogs.com/qianxiaox/p/14041717.html)  

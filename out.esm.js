// src/validate.js
function isValidYear(v) {
  v = String(v);
  return /^\d{4}$/.test(v.trim());
}
function isValidMonth(v) {
  v = Number(v);
  if (v !== v) {
    return false;
  }
  if (v < 1 || v > 12) {
    return false;
  }
  return /^\d{1,2}$/.test(v);
}
function isValidTime(val) {
  if (!val) {
    return false;
  }
  return "Invalid Date" !== new Date(val).toString();
}

// src/padString.js
function padString(str, len, char = " ", pos = "start") {
  if (typeof str !== "string") {
    str = str + "";
  }
  if (str.length >= len) {
    return str;
  }
  if (str.padStart) {
    if (pos === "start") {
      return str.padStart(len, char);
    }
    return str.padEnd(len, char);
  }
  if (pos === "start") {
    str = char.repeat(len) + str;
    return str.slice(-len);
  }
  str += char.repeat(len);
  return str.slice(0, len);
}

// src/date.js
function isLeapyear(year) {
  if (!year) {
    console.log("\u8BF7\u8F93\u5165\u5E74\u4EFD");
    return false;
  }
  year = String(year).trim();
  if (!isValidYear(year)) {
    console.log("\u53C2\u6570" + year + "\u5E76\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5E74\u4EFD");
    return false;
  }
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getMonthTotal(year, month) {
  if (!year) {
    console.log("\u8BF7\u8F93\u5165\u5E74\u4EFD");
    return -1;
  }
  if (!month) {
    console.log("\u8BF7\u8F93\u5165\u6708\u4EFD");
    return -1;
  }
  if (!isValidYear(year)) {
    console.log("\u53C2\u6570" + year + "\u5E76\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5E74\u4EFD");
    return -1;
  }
  if (!isValidMonth(month)) {
    console.log("\u53C2\u6570" + month + "\u5E76\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u6708\u4EFD");
    return -1;
  }
  return new Date(year, month, 0).getDate();
}
function formatDate(date, format) {
  date = new Date(date);
  if (date.toString() === "Invalid Date") {
    console.log("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65F6\u95F4");
    return "";
  }
  const y = date.getFullYear();
  const M = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  format = format.replace(/y+/, y);
  const list = {
    "M+": M,
    "d+": d,
    "h+": h,
    "m+": m,
    "s+": s
  };
  Object.keys(list).forEach((k) => {
    const reg = new RegExp(k);
    format = format.replace(reg, padString(list[k], 2, "0"));
  });
  return format;
}

// src/day.js
function getTimeNum(time, type) {
  if (!isValidTime(time)) {
    return -1;
  }
  time = new Date(time);
  const one_day = 864e5;
  const year = time.getFullYear();
  const start = new Date(year, 0);
  if (type === "day") {
    const num = (time.getTime() - start.getTime()) / one_day;
    if (/\./.test(num)) {
      return Math.ceil(num);
    }
    return num + 1;
  }
  if (type === "week") {
    const day = start.getDay();
    const offset = day === 0 ? 1 : 7 - day + 1;
    let num = (time.getTime() - start.getTime() + 1) / one_day;
    if (num <= offset) {
      return 1;
    }
    num -= offset;
    return Math.ceil(num / 7) + 1;
  }
  return -1;
}

// src/color.js
function randomColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

// src/type.js
function isString(val) {
  return getType(val) === "string";
}
function isNumber(val) {
  const type = getType(val);
  return type === "number" || type === "bigint";
}
function isArray(val) {
  if (Array.isArray) {
    return Array.isArray(val);
  }
  return getType(val) === "array";
}
function isObject(val) {
  return getType(val) === "object";
}
function isTruly(val) {
  return !!val;
}
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

// src/isOdd.js
function isOdd(val) {
  console.log("isOdd");
  if (!isNumber(val)) {
    console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${val} \u4E0D\u662Fnumber\u7C7B\u578B`);
    return false;
  }
  return !!(val & 1);
}

// src/isEven.js
function isEven(val) {
  if (!isNumber(val)) {
    console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${val} \u4E0D\u662Fnumber\u7C7B\u578B`);
    return false;
  }
  return !isOdd(val);
}

// src/randomNum.js
function randomNum(max, min, isInteger) {
  if (!isNumber(max)) {
    console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${max} \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57`);
    return NaN;
  }
  if (!isNumber(min)) {
    console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${min} \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57`);
    return NaN;
  }
  if (max <= min) {
    console.log(`\u8F93\u5165\u7684\u533A\u95F4\u8303\u56F4 max: ${max} \u5E94\u8BE5\u5927\u4E8E min: ${min}`);
    return NaN;
  }
  const v = Math.random() * (max - min) + min;
  if (isInteger) {
    return Math.floor(v);
  }
  return v;
}

// src/clone.js
function deepClone(obj, map = /* @__PURE__ */ new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj == null || typeof obj != "object") return obj;
  if (map.has(obj)) {
    return map.get(obj);
  }
  const target = new obj.constructor();
  map.set(obj, target);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      target[key] = deepClone(obj[key], map);
    }
  }
  return target;
}
export {
  deepClone,
  formatDate,
  getMonthTotal,
  getTimeNum,
  getType,
  isArray,
  isEven,
  isLeapyear,
  isNumber,
  isObject,
  isOdd,
  isString,
  isTruly,
  padString,
  randomColor,
  randomNum
};

(() => {
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
      console.log("\u53C2\u6570" + month + "\u5E76\u4E0D\u662F\u4E00\u4E2A\u6709\u7684\u6708\u4EFD");
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
    format = format.replace(/M+/, ("0" + M).slice(-2));
    format = format.replace(/d+/, ("0" + d).slice(-2));
    format = format.replace(/h+/, ("0" + h).slice(-2));
    format = format.replace(/m+/, ("0" + m).slice(-2));
    format = format.replace(/s+/, ("0" + s).slice(-2));
    return format;
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
    if (isNumber(max)) {
      console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${max} \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57`);
      return NaN;
    }
    if (isNumber(min)) {
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
})();

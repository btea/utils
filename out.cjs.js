(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/validate.js
  var require_validate = __commonJS({
    "src/validate.js"(exports) {
      var __defProp = Object.defineProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      __export(exports, {
        isValidMonth: () => isValidMonth,
        isValidYear: () => isValidYear
      });
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
    }
  });

  // src/date.js
  var require_date = __commonJS({
    "src/date.js"(exports) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames(module2))
            if (!__hasOwnProp.call(target, key) && key !== "default")
              __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toModule = (module2) => {
        return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
      };
      __export(exports, {
        formatDate: () => formatDate,
        getMonthTotal: () => getMonthTotal,
        isLeapyear: () => isLeapyear
      });
      var import_validate = __toModule(require_validate());
      function isLeapyear(year) {
        if (!year) {
          console.log("\u8BF7\u8F93\u5165\u5E74\u4EFD");
          return false;
        }
        year = String(year).trim();
        if (!(0, import_validate.isValidYear)(year)) {
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
        if (!(0, import_validate.isValidYear)(year)) {
          console.log("\u53C2\u6570" + year + "\u5E76\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5E74\u4EFD");
          return -1;
        }
        if (!(0, import_validate.isValidMonth)(month)) {
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
    }
  });

  // src/color.js
  var require_color = __commonJS({
    "src/color.js"(exports) {
      var __defProp = Object.defineProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      __export(exports, {
        randomColor: () => randomColor
      });
      function randomColor() {
        return "#" + Math.random().toString(16).slice(2, 8);
      }
    }
  });

  // src/type.js
  var require_type = __commonJS({
    "src/type.js"(exports) {
      var __defProp = Object.defineProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      __export(exports, {
        getType: () => getType,
        isArray: () => isArray,
        isNumber: () => isNumber,
        isObject: () => isObject,
        isString: () => isString,
        isTruly: () => isTruly
      });
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
    }
  });

  // src/isOdd.js
  var require_isOdd = __commonJS({
    "src/isOdd.js"(exports) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames(module2))
            if (!__hasOwnProp.call(target, key) && key !== "default")
              __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toModule = (module2) => {
        return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
      };
      __export(exports, {
        isOdd: () => isOdd
      });
      var import_type = __toModule(require_type());
      function isOdd(val) {
        if (!(0, import_type.isNumber)(val)) {
          console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${val} \u4E0D\u662Fnumber\u7C7B\u578B`);
          return false;
        }
        return !!(val & 1);
      }
    }
  });

  // src/isEven.js
  var require_isEven = __commonJS({
    "src/isEven.js"(exports) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames(module2))
            if (!__hasOwnProp.call(target, key) && key !== "default")
              __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toModule = (module2) => {
        return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
      };
      __export(exports, {
        isEven: () => isEven
      });
      var import_isOdd = __toModule(require_isOdd());
      var import_type = __toModule(require_type());
      function isEven(val) {
        if (!(0, import_type.isNumber)(val)) {
          console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${val} \u4E0D\u662Fnumber\u7C7B\u578B`);
          return false;
        }
        return !(0, import_isOdd.isOdd)(val);
      }
    }
  });

  // src/randomNum.js
  var require_randomNum = __commonJS({
    "src/randomNum.js"(exports) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames(module2))
            if (!__hasOwnProp.call(target, key) && key !== "default")
              __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toModule = (module2) => {
        return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
      };
      __export(exports, {
        randomNum: () => randomNum
      });
      var import_type = __toModule(require_type());
      function randomNum(max, min, isInteger) {
        if ((0, import_type.isNumber)(max)) {
          console.log(`\u8F93\u5165\u7684\u53C2\u6570 ${max} \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57`);
          return NaN;
        }
        if ((0, import_type.isNumber)(min)) {
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
    }
  });

  // index.js
  var require_utils = __commonJS({
    "index.js"(exports) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames(module2))
            if (!__hasOwnProp.call(target, key) && key !== "default")
              __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toModule = (module2) => {
        return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
      };
      __export(exports, {
        formatDate: () => import_date.formatDate,
        getMonthTotal: () => import_date.getMonthTotal,
        getType: () => import_type.getType,
        isArray: () => import_type.isArray,
        isEven: () => import_isEven.isEven,
        isLeapyear: () => import_date.isLeapyear,
        isNumber: () => import_type.isNumber,
        isObject: () => import_type.isObject,
        isOdd: () => import_isOdd.isOdd,
        isString: () => import_type.isString,
        isTruly: () => import_type.isTruly,
        randomColor: () => import_color.randomColor,
        randomNum: () => import_randomNum.randomNum
      });
      var import_date = __toModule(require_date());
      var import_color = __toModule(require_color());
      var import_isEven = __toModule(require_isEven());
      var import_isOdd = __toModule(require_isOdd());
      var import_randomNum = __toModule(require_randomNum());
      var import_type = __toModule(require_type());
    }
  });
  window.zys = require_utils();
})();

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
exports.isNumber = isNumber;
exports.isArray = isArray;
exports.copyArray = copyArray;
// 测试文件
function isString(value) {
    return (typeof value === 'string') || (value instanceof String);
}
function isNumber(value) {
    return (typeof value === 'number') || (value instanceof Number);
}
function isArray(value) {
    return Array.isArray(value);
}
function copyArray(value) {
    return __spreadArray([], value, true);
}

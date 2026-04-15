"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeNum = encodeNum;
exports.decodeNum = decodeNum;
exports.decodeKey = decodeKey;
exports.encodeBool = encodeBool;
exports.decodeBool = decodeBool;
exports.encodeStr = encodeStr;
exports.decodeStr = decodeStr;
const number_1 = require("./number");
function encodeNum(num) {
    if (num === Infinity) {
        return 'N|+';
    }
    if (num === -Infinity) {
        return 'N|-';
    }
    if (Number.isNaN(num)) {
        return 'N|0';
    }
    return 'n|' + (0, number_1.num_to_s)(num);
}
/**
 * @deprecated optimized by inlining into decode() function
 * - `N|+` -> +Infinity
 * - `N|-` -> -Infinity
 * - `N|0` -> NaN
 * - `n|xxx` -> number
 */
function decodeNum(s) {
    if (s.length === 3 && s[0] === 'N' && s[1] === '|') {
        switch (s[2]) {
            case '+': // N|+
                return Infinity;
            case '-': // N|-
                return -Infinity;
            case '0': // N|0
                return NaN;
        }
    }
    return (0, number_1.s_to_num)(s.slice(2));
}
function decodeKey(key) {
    return typeof key === 'number' ? key : (0, number_1.s_to_int)(key);
}
function encodeBool(b) {
    return b ? 'b|T' : 'b|F';
}
function decodeBool(s) {
    if (s.length === 3 && s[0] === 'b' && s[1] === '|') {
        switch (s[2]) {
            case 'T':
                return true;
            case 'F':
                return false;
        }
    }
    return !!s;
}
function encodeStr(str) {
    if (str[1] === '|') {
        switch (str[0]) {
            case 'b':
            case 'o':
            case 'n':
            case 'a':
            case 's':
                return 's|' + str;
        }
    }
    return str;
}
function decodeStr(s) {
    return s[0] === 's' && s[1] === '|' ? s.substr(2) : s;
}

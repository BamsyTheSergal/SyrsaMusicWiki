"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_to_bool = s_to_bool;
exports.bool_to_s = bool_to_s;
exports.test = test;
function s_to_bool(s) {
    switch (s) {
        case 'T':
            return true;
        case 'F':
            return false;
    }
    return !!s;
}
function bool_to_s(bool) {
    return bool ? 'T' : 'F';
}
function test() {
    console.log({
        true: bool_to_s(true),
        false: bool_to_s(false),
        T: s_to_bool('T'),
        F: s_to_bool('F'),
    });
}
// test()

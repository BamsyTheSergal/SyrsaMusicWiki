"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = getType;
exports.throwUnknownDataType = throwUnknownDataType;
exports.throwUnsupportedData = throwUnsupportedData;
function getType(o) {
    return Object.prototype.toString.call(o);
}
function throwUnknownDataType(o) {
    throw new TypeError('unsupported data type: ' + getType(o));
}
function throwUnsupportedData(name) {
    throw new TypeError('unsupported data type: ' + name);
}

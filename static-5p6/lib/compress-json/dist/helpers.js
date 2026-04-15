"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimUndefined = trimUndefined;
exports.trimUndefinedRecursively = trimUndefinedRecursively;
function trimUndefined(object) {
    for (const key in object) {
        if (object[key] === undefined) {
            delete object[key];
        }
    }
}
function trimUndefinedRecursively(object) {
    trimUndefinedRecursivelyLoop(object, new Set());
}
function trimUndefinedRecursivelyLoop(object, tracks) {
    tracks.add(object);
    for (const key in object) {
        if (object[key] === undefined) {
            delete object[key];
        }
        else {
            const value = object[key];
            if (value && typeof value === 'object' && !tracks.has(value)) {
                trimUndefinedRecursivelyLoop(value, tracks);
            }
        }
    }
}

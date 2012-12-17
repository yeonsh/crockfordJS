"use strict";

function isNumber(arg) {
    return typeof arg === 'number' && isFinite(arg);
}

function isArray(arg) {
    return (arg && typeof arg === 'object' && typeof arg.length === 'number' && !(arg.propertyIsEnumerable('length')));
}

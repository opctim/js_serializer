"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var ObjectVisitor = /** @class */ (function () {
    function ObjectVisitor() {
    }
    ObjectVisitor.prototype.serialize = function (value, serializer) {
        if (typeof value.constructor !== 'undefined' &&
            typeof value.constructor.name !== 'undefined' &&
            value.constructor.name !== 'Object') {
            if (typeof value.toJSON !== 'function') {
                value.__restoreClass = value.constructor.name;
            }
        }
        else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    var visitor = index_1.default.getVisitor(value[key]);
                    value[key] = visitor.serialize(value[key], serializer);
                }
            }
        }
        return value;
    };
    ObjectVisitor.prototype.deserialize = function (value, serializer) {
        var classFromScope = serializer._findFromClassScopeByName(value.__restoreClass || null);
        if (classFromScope) {
            var classInstance = new classFromScope();
            for (var key in value) {
                if (value.hasOwnProperty(key) && key !== '__restoreClass') {
                    classInstance[key] = value[key];
                }
            }
            return classInstance;
        }
        else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    var visitor = index_1.default.getVisitor(value[key]);
                    value[key] = visitor.deserialize(value[key], serializer);
                }
            }
        }
        return value;
    };
    ObjectVisitor.prototype.supports = function (value) {
        return typeof value === 'object' && !Array.isArray(value);
    };
    return ObjectVisitor;
}());
exports.default = ObjectVisitor;

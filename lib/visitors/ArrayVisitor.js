"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var ArrayVisitor = /** @class */ (function () {
    function ArrayVisitor() {
    }
    ArrayVisitor.prototype.serialize = function (value, serializer) {
        for (var i = 0; i < value.length; i++) {
            var visitor = index_1.default.getVisitor(value[i]);
            value[i] = visitor.serialize(value[i], serializer);
        }
        return value;
    };
    ArrayVisitor.prototype.deserialize = function (value, serializer) {
        for (var i = 0; i < value.length; i++) {
            var visitor = index_1.default.getVisitor(value[i]);
            value[i] = visitor.deserialize(value[i], serializer);
        }
        return value;
    };
    ArrayVisitor.prototype.supports = function (value) {
        return Array.isArray(value);
    };
    return ArrayVisitor;
}());
exports.default = ArrayVisitor;

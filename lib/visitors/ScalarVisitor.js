"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScalarVisitor = /** @class */ (function () {
    function ScalarVisitor() {
    }
    ScalarVisitor.prototype.serialize = function (value, serializer) {
        return value;
    };
    ScalarVisitor.prototype.deserialize = function (value, serializer) {
        return value;
    };
    ScalarVisitor.prototype.supports = function (value) {
        return typeof value !== 'object';
    };
    return ScalarVisitor;
}());
exports.default = ScalarVisitor;

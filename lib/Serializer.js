"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitors_1 = require("./visitors");
var Serializer = /** @class */ (function () {
    function Serializer(classScope) {
        this.classScope = classScope;
    }
    Serializer.prototype.serialize = function (data) {
        var visitor = visitors_1.default.getVisitor(data);
        return JSON.stringify(visitor.serialize(data, this));
    };
    Serializer.prototype.deserialize = function (json) {
        var data = JSON.parse(json);
        var visitor = visitors_1.default.getVisitor(data);
        return visitor.deserialize(data, this);
    };
    /**
     * @internal
     */
    Serializer.prototype._findFromClassScopeByName = function (className) {
        return this.classScope[className] || null;
    };
    return Serializer;
}());
exports.default = Serializer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScalarVisitor_1 = require("./ScalarVisitor");
var ArrayVisitor_1 = require("./ArrayVisitor");
var ObjectVisitor_1 = require("./ObjectVisitor");
exports.default = {
    visitors: [
        new ScalarVisitor_1.default(),
        new ArrayVisitor_1.default(),
        new ObjectVisitor_1.default()
    ],
    getVisitor: function (data) {
        for (var _i = 0, _a = this.visitors; _i < _a.length; _i++) {
            var visitor = _a[_i];
            if (visitor.supports(data)) {
                return visitor;
            }
        }
        return new ScalarVisitor_1.default();
    }
};

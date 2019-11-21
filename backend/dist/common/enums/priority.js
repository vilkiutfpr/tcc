"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var EPriority;
(function (EPriority) {
    EPriority["HIGH"] = "HIGH";
    EPriority["MEDIUM"] = "MEDIUM";
    EPriority["LOW"] = "LOW";
})(EPriority = exports.EPriority || (exports.EPriority = {}));
type_graphql_1.registerEnumType(EPriority, {
    name: 'Priority',
});
//# sourceMappingURL=priority.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const task_1 = require("./task");
let Counters = class Counters {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Counters.prototype, "high", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Counters.prototype, "medium", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], Counters.prototype, "low", void 0);
Counters = __decorate([
    type_graphql_1.ObjectType()
], Counters);
exports.Counters = Counters;
let TaskPayload = class TaskPayload {
};
__decorate([
    type_graphql_1.Field(() => [task_1.Task]),
    __metadata("design:type", Array)
], TaskPayload.prototype, "items", void 0);
__decorate([
    type_graphql_1.Field(() => Counters),
    __metadata("design:type", Counters)
], TaskPayload.prototype, "counters", void 0);
TaskPayload = __decorate([
    type_graphql_1.ObjectType()
], TaskPayload);
exports.TaskPayload = TaskPayload;
//# sourceMappingURL=task-payload.js.map
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
const entities_1 = require("../../../category/entities");
const entities_2 = require("../../../user/entities");
const enums_1 = require("../../../../common/enums");
const entities_3 = require("../../../upload/entities");
let TaskCreateInput = class TaskCreateInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], TaskCreateInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], TaskCreateInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => enums_1.EPriority),
    __metadata("design:type", String)
], TaskCreateInput.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], TaskCreateInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], TaskCreateInput.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], TaskCreateInput.prototype, "done", void 0);
__decorate([
    type_graphql_1.Field(() => entities_3.Upload, { nullable: true }),
    __metadata("design:type", entities_3.Upload)
], TaskCreateInput.prototype, "document", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_1.CategoryRelationalInput], { nullable: true }),
    __metadata("design:type", Array)
], TaskCreateInput.prototype, "categories", void 0);
__decorate([
    type_graphql_1.Field(() => entities_2.UserRelationalInput),
    __metadata("design:type", entities_2.UserRelationalInput)
], TaskCreateInput.prototype, "assignedTo", void 0);
__decorate([
    type_graphql_1.Field(() => entities_2.UserRelationalInput),
    __metadata("design:type", entities_2.UserRelationalInput)
], TaskCreateInput.prototype, "assignedBy", void 0);
TaskCreateInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('TaskCreateInput')
], TaskCreateInput);
exports.TaskCreateInput = TaskCreateInput;
//# sourceMappingURL=create.input.js.map
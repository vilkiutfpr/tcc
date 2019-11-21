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
const entities_1 = require("../../../user/entities");
const entities_2 = require("../../../category/entities");
const enums_1 = require("../../../../common/enums");
const entities_3 = require("../../../upload/entities");
let TaskUpdateInput = class TaskUpdateInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], TaskUpdateInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TaskUpdateInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TaskUpdateInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => enums_1.EPriority, { nullable: true }),
    __metadata("design:type", String)
], TaskUpdateInput.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TaskUpdateInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], TaskUpdateInput.prototype, "done", void 0);
__decorate([
    type_graphql_1.Field(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], TaskUpdateInput.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(() => entities_3.Upload, { nullable: true }),
    __metadata("design:type", entities_3.Upload)
], TaskUpdateInput.prototype, "document", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_2.CategoryRelationalInput], { nullable: true }),
    __metadata("design:type", Array)
], TaskUpdateInput.prototype, "categories", void 0);
__decorate([
    type_graphql_1.Field(() => entities_1.UserRelationalInput, { nullable: true }),
    __metadata("design:type", entities_1.UserRelationalInput)
], TaskUpdateInput.prototype, "assignedTo", void 0);
__decorate([
    type_graphql_1.Field(() => entities_1.UserRelationalInput, { nullable: true }),
    __metadata("design:type", entities_1.UserRelationalInput)
], TaskUpdateInput.prototype, "assignedBy", void 0);
TaskUpdateInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('TaskUpdateInput')
], TaskUpdateInput);
exports.TaskUpdateInput = TaskUpdateInput;
//# sourceMappingURL=update.input.js.map
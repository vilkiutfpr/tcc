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
let NoticeUpdateInput = class NoticeUpdateInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], NoticeUpdateInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], NoticeUpdateInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], NoticeUpdateInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_1.UserRelationalInput], { nullable: true }),
    __metadata("design:type", Array)
], NoticeUpdateInput.prototype, "seenBy", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_1.UserRelationalInput], { nullable: true }),
    __metadata("design:type", Array)
], NoticeUpdateInput.prototype, "assignedTo", void 0);
__decorate([
    type_graphql_1.Field(() => entities_1.UserRelationalInput, { nullable: true }),
    __metadata("design:type", entities_1.UserRelationalInput)
], NoticeUpdateInput.prototype, "createdBy", void 0);
__decorate([
    type_graphql_1.Field(() => enums_1.EPriority, { nullable: true }),
    __metadata("design:type", String)
], NoticeUpdateInput.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_2.CategoryRelationalInput], { nullable: true }),
    __metadata("design:type", Array)
], NoticeUpdateInput.prototype, "categories", void 0);
NoticeUpdateInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('NoticeUpdateInput')
], NoticeUpdateInput);
exports.NoticeUpdateInput = NoticeUpdateInput;
//# sourceMappingURL=update.input.js.map
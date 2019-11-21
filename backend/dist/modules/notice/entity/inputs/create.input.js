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
let NoticeCreateInput = class NoticeCreateInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NoticeCreateInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], NoticeCreateInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_2.UserRelationalInput]),
    __metadata("design:type", Array)
], NoticeCreateInput.prototype, "seenBy", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_2.UserRelationalInput]),
    __metadata("design:type", Array)
], NoticeCreateInput.prototype, "assignedTo", void 0);
__decorate([
    type_graphql_1.Field(() => entities_2.UserRelationalInput),
    __metadata("design:type", entities_2.UserRelationalInput)
], NoticeCreateInput.prototype, "createdBy", void 0);
__decorate([
    type_graphql_1.Field(() => enums_1.EPriority),
    __metadata("design:type", String)
], NoticeCreateInput.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field(() => [entities_1.CategoryRelationalInput]),
    __metadata("design:type", Array)
], NoticeCreateInput.prototype, "categories", void 0);
NoticeCreateInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('NoticeCreateInput')
], NoticeCreateInput);
exports.NoticeCreateInput = NoticeCreateInput;
//# sourceMappingURL=create.input.js.map
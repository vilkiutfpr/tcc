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
const user_entity_1 = require("../user.entity");
const entities_1 = require("../../../fire-station/entities");
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserUpdateInput.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field(() => entities_1.FireStationRelationalInput, { nullable: true }),
    __metadata("design:type", entities_1.FireStationRelationalInput)
], UserUpdateInput.prototype, "fireStation", void 0);
UserUpdateInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('UserUpdateInput')
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
//# sourceMappingURL=update.input.js.map
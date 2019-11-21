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
var AppointmentWhereInput_1;
const type_graphql_1 = require("type-graphql");
const entities_1 = require("../../../user/entities");
const type_graphql_2 = require("type-graphql");
const Xpto = type_graphql_2.createUnionType({
    name: 'DateTimeFilter',
    types: () => [Date, String],
});
let AppointmentWhereInput = AppointmentWhereInput_1 = class AppointmentWhereInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", String)
], AppointmentWhereInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AppointmentWhereInput.prototype, "start", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AppointmentWhereInput.prototype, "end", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], AppointmentWhereInput.prototype, "billed", void 0);
__decorate([
    type_graphql_1.Field(() => entities_1.UserRelationalInput, { nullable: true }),
    __metadata("design:type", entities_1.UserRelationalInput)
], AppointmentWhereInput.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => [AppointmentWhereInput_1], { nullable: true }),
    __metadata("design:type", Object)
], AppointmentWhereInput.prototype, "OR", void 0);
AppointmentWhereInput = AppointmentWhereInput_1 = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('AppointmentWhereInput')
], AppointmentWhereInput);
exports.AppointmentWhereInput = AppointmentWhereInput;
//# sourceMappingURL=where.input.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const where_unique_input_1 = require("./where-unique.input");
let UserRelationalInput = class UserRelationalInput extends where_unique_input_1.UserWhereUniqueInput {
};
UserRelationalInput = __decorate([
    type_graphql_1.ArgsType(),
    type_graphql_1.InputType('UserRelationalInput')
], UserRelationalInput);
exports.UserRelationalInput = UserRelationalInput;
//# sourceMappingURL=relational.input.js.map
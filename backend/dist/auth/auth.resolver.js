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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const auth_entity_1 = require("./entities/auth.entity");
const user_entity_1 = require("../modules/user/entities/user.entity");
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    me(context) {
        return __awaiter(this, void 0, void 0, function* () {
            return context.req.user;
        });
    }
    signIn(email, password, platform) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.authService.signIn(email, password, platform);
            return yield result;
        });
    }
};
__decorate([
    common_1.UseGuards(guards_1.GqlAuthGuard),
    graphql_1.Query(() => user_entity_1.User),
    __param(0, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
__decorate([
    graphql_1.Mutation(() => auth_entity_1.Auth),
    __param(0, graphql_1.Args('email')),
    __param(1, graphql_1.Args('password')),
    __param(2, graphql_1.Args('platform')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signIn", null);
AuthResolver = __decorate([
    graphql_1.Resolver('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map
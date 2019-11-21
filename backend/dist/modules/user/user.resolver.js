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
const user_service_1 = require("./user.service");
const entities_1 = require("./entities");
const guards_1 = require("../../guards");
const photon_service_1 = require("../../photon/photon.service");
const entities_2 = require("../fire-station/entities");
const entities_3 = require("../task/entities");
const entities_4 = require("../appointment/entities");
let UserResolver = class UserResolver {
    constructor(userService, photonService) {
        this.userService = userService;
        this.photonService = photonService;
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.create(data);
        });
    }
    updateUser(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.update(data, where);
        });
    }
    deleteUser(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.delete(where);
        });
    }
    users(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.users(where);
        });
    }
    user(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.user(where);
        });
    }
    fireStation(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            const fireStation = yield this.photonService.photon.fireStations.findMany({
                where: { users: { some: { id } } },
            });
            return fireStation[0];
        });
    }
    responsibleTasks(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            const tasks = yield this.photonService.photon.tasks.findMany({
                where: { assignedTo: { id } },
            });
            return tasks;
        });
    }
    createdTasks(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            const tasks = yield this.photonService.photon.tasks.findMany({
                where: { assignedBy: { id } },
            });
            return tasks;
        });
    }
    appointments(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            const appointments = yield this.photonService.photon.appointments.findMany({
                where: { user: { id } },
            });
            return appointments;
        });
    }
};
__decorate([
    graphql_1.Mutation(() => entities_1.User),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserCreateInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => entities_1.User),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('data')),
    __param(1, graphql_1.Args({ name: 'where', type: () => entities_1.UserWhereUniqueInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserUpdateInput,
        entities_1.UserWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(() => entities_1.User),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Query(() => [entities_1.User]),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args({ name: 'where', type: () => entities_1.UserWhereInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserWhereInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    graphql_1.Query(() => entities_1.User, { nullable: true }),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    graphql_1.ResolveProperty('fireStation', () => entities_2.FireStation),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "fireStation", null);
__decorate([
    graphql_1.ResolveProperty('responsibleTasks', () => [entities_3.Task]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "responsibleTasks", null);
__decorate([
    graphql_1.ResolveProperty('createdTasks', () => [entities_3.Task]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createdTasks", null);
__decorate([
    graphql_1.ResolveProperty('appointments', () => [entities_4.Appointment]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "appointments", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => entities_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService,
        photon_service_1.PhotonService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map
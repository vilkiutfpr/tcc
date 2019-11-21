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
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const photon_service_1 = require("../../photon/photon.service");
const entities_1 = require("./entities");
const graphql_1 = require("@nestjs/graphql");
let UserService = class UserService {
    constructor(photonService) {
        this.photonService = photonService;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = user;
                const registeredUser = yield this.user({
                    email,
                });
                if (registeredUser) {
                    throw new common_1.BadRequestException('Already has records with informed e-mail.');
                }
                const newPassword = yield bcrypt_1.hash(password, 10);
                const newUser = Object.assign({}, user, { password: newPassword, fireStation: {
                        connect: user.fireStation,
                    }, createdTasks: {
                        connect: user.createdTasks,
                    }, responsibleTasks: {
                        connect: user.responsibleTasks,
                    } });
                return yield this.photonService.photon.users.create({ data: newUser });
            }
            catch (e) {
                throw e;
            }
        });
    }
    update(user, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userToUpdate = Object.assign({}, user, (user.password && {
                    password: yield bcrypt_1.hash(user.password, 10),
                }), (user.fireStation && {
                    fireStation: {
                        connect: user.fireStation,
                    },
                }));
                const configuredWhere = where ? where : { id: user.id };
                return yield this.photonService.photon.users.update({
                    data: userToUpdate,
                    where: configuredWhere,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
    delete(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.users.delete({ where });
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    users(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.users.findMany({ where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    user(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.users
                    .findOne({ where })
                    .catch(() => null);
            }
            catch (e) {
                throw e;
            }
        });
    }
};
__decorate([
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserWhereInput]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "users", null);
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [photon_service_1.PhotonService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
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
const photon_service_1 = require("../../photon/photon.service");
const entities_1 = require("./entities");
let FireStationResolver = class FireStationResolver {
    constructor(photonService) {
        this.photonService = photonService;
    }
    users(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = user;
            const users = yield this.photonService.photon.users.findMany({
                where: {
                    fireStation: { id },
                },
            });
            return users;
        });
    }
};
__decorate([
    graphql_1.ResolveProperty('users'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FireStationResolver.prototype, "users", null);
FireStationResolver = __decorate([
    graphql_1.Resolver(of => entities_1.FireStation),
    __metadata("design:paramtypes", [photon_service_1.PhotonService])
], FireStationResolver);
exports.FireStationResolver = FireStationResolver;
//# sourceMappingURL=fire-station.resolver.js.map
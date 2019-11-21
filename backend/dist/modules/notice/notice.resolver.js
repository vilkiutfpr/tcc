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
const notice_service_1 = require("./notice.service");
const create_input_1 = require("./entity/inputs/create.input");
const entity_1 = require("./entity");
const update_input_1 = require("./entity/inputs/update.input");
const where_unique_input_1 = require("./entity/inputs/where-unique.input");
const photon_service_1 = require("../../photon/photon.service");
const user_decorator_1 = require("../user/decorator/user.decorator");
const common_1 = require("@nestjs/common");
const guards_1 = require("../../guards");
let NoticeResolver = class NoticeResolver {
    constructor(noticeService, photonService) {
        this.noticeService = noticeService;
        this.photonService = photonService;
    }
    createNotice(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.create(data);
        });
    }
    updateNotice(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.update(data, where);
        });
    }
    deleteNotice(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.delete(where);
        });
    }
    notice(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.notice(where);
        });
    }
    notices(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.notices(where);
        });
    }
    userNotices(where, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticeService.userNotices(where, user.id);
        });
    }
    categories(notice) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = notice;
            const categories = yield this.photonService.photon.categories.findMany({
                where: { notices: { some: { id } } },
            });
            return categories;
        });
    }
    createdBy(notice) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = notice;
            const users = yield this.photonService.photon.users.findMany({
                where: { createdNotices: { some: { id } } },
            });
            return users[0];
        });
    }
    assignedTo(notice) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = notice;
            const users = yield this.photonService.photon.users.findMany({
                where: { assignedNotices: { some: { id } } },
            });
            return users;
        });
    }
    seenBy(notice) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = notice;
            const users = yield this.photonService.photon.users.findMany({
                where: { seenNotices: { some: { id } } },
            });
            return users;
        });
    }
};
__decorate([
    graphql_1.Mutation(() => entity_1.Notice),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_input_1.NoticeCreateInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "createNotice", null);
__decorate([
    graphql_1.Mutation(() => entity_1.Notice),
    __param(0, graphql_1.Args('data')),
    __param(1, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_input_1.NoticeUpdateInput,
        where_unique_input_1.NoticeWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "updateNotice", null);
__decorate([
    graphql_1.Mutation(() => entity_1.Notice),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [where_unique_input_1.NoticeWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "deleteNotice", null);
__decorate([
    graphql_1.Query(() => entity_1.Notice),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [where_unique_input_1.NoticeWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "notice", null);
__decorate([
    graphql_1.Query(() => [entity_1.Notice]),
    __param(0, graphql_1.Args({ name: 'where', type: () => entity_1.NoticeWhereInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.NoticeWhereInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "notices", null);
__decorate([
    graphql_1.Query(() => [entity_1.Notice]),
    __param(0, graphql_1.Args({ name: 'where', type: () => entity_1.NoticeWhereInput, nullable: true })),
    __param(1, user_decorator_1.default()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.NoticeWhereInput, Object]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "userNotices", null);
__decorate([
    graphql_1.ResolveProperty('categories'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "categories", null);
__decorate([
    graphql_1.ResolveProperty('createdBy'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "createdBy", null);
__decorate([
    graphql_1.ResolveProperty('assignedTo'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "assignedTo", null);
__decorate([
    graphql_1.ResolveProperty('seenBy'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "seenBy", null);
NoticeResolver = __decorate([
    graphql_1.Resolver(() => entity_1.Notice),
    common_1.UseGuards(guards_1.GqlAuthGuard),
    __metadata("design:paramtypes", [notice_service_1.NoticeService,
        photon_service_1.PhotonService])
], NoticeResolver);
exports.NoticeResolver = NoticeResolver;
//# sourceMappingURL=notice.resolver.js.map
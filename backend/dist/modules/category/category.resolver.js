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
const category_service_1 = require("./category.service");
const guards_1 = require("../../guards");
const entities_1 = require("./entities");
const photon_service_1 = require("../../photon/photon.service");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService, photonService) {
        this.categoryService = categoryService;
        this.photonService = photonService;
    }
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryService.create(data);
        });
    }
    updateCategory(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryService.update(data, where);
        });
    }
    deleteCategory(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryService.delete(where);
        });
    }
    categories(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryService.categories(where);
        });
    }
    category(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryService.category(where);
        });
    }
    tasks(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = category;
            const categories = yield this.photonService.photon.tasks.findMany({
                where: { categories: { some: { id } } },
            });
            return categories;
        });
    }
};
__decorate([
    graphql_1.Mutation(() => entities_1.Category),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.CategoryCreateInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Category),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('data')),
    __param(1, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.CategoryUpdateInput,
        entities_1.CategoryWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Category),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.CategoryWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
__decorate([
    graphql_1.Query(() => [entities_1.Category]),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.CategoryWhereInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    graphql_1.Query(() => entities_1.Category, { nullable: true }),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.CategoryWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
__decorate([
    graphql_1.ResolveProperty('tasks'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "tasks", null);
CategoryResolver = __decorate([
    graphql_1.Resolver(() => entities_1.Category),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        photon_service_1.PhotonService])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map
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
const photon_service_1 = require("../../photon/photon.service");
let CategoryService = class CategoryService {
    constructor(photonService) {
        this.photonService = photonService;
    }
    create(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.categories.create({
                    data: category,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
    update(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.categories.update({ data, where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    delete(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.categories.delete({
                    where: where,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
    category(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.categories.findOne({ where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    categories(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.categories.findMany({ where });
            }
            catch (e) {
                throw e;
            }
        });
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [photon_service_1.PhotonService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map
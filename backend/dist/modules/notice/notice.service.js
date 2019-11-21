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
let NoticeService = class NoticeService {
    constructor(photonService) {
        this.photonService = photonService;
    }
    create(notice) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNotice = this.changePayloadToPhoton(notice);
                return yield this.photonService.photon.notices.create({
                    data: newNotice,
                });
            }
            catch (e) {
                console.log('Error: ');
                console.log(e);
            }
        });
    }
    update(notice, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateNotice = this.changePayloadToPhoton(notice);
                console.log(updateNotice);
                return yield this.photonService.photon.notices.update({
                    data: updateNotice,
                    where,
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    delete(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photonService.photon.notices.delete({ where });
        });
    }
    notice(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photonService.photon.notices.findOne({ where });
        });
    }
    notices(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photonService.photon.notices.findMany({ where });
        });
    }
    userNotices(where, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.photonService.photon.notices.findMany({
                where: Object.assign({}, where, { assignedTo: { some: { id: userId } } }),
            });
        });
    }
    changePayloadToPhoton(data) {
        return Object.assign({}, data, (data.categories && {
            categories: {
                connect: data.categories.map(item => ({ id: item.id })),
            },
        }), (data.createdBy && {
            createdBy: {
                connect: { id: data.createdBy.id },
            },
        }), (data.assignedTo && {
            assignedTo: {
                connect: data.assignedTo.map(item => ({ id: item.id })),
            },
        }), (data.seenBy && {
            seenBy: {
                connect: data.seenBy.map(item => ({ id: item.id })),
            },
        }));
    }
};
NoticeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [photon_service_1.PhotonService])
], NoticeService);
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map
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
const upload_service_1 = require("../upload/upload.service");
let TaskService = class TaskService {
    constructor(photonService, uploadService) {
        this.photonService = photonService;
        this.uploadService = uploadService;
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let uploadedData = null;
                if (task.document) {
                    uploadedData = yield this.uploadService.single({
                        filename: `tasks/${task.title}`,
                        base64: task.document.base64,
                    });
                }
                const newTask = Object.assign({}, task, (uploadedData &&
                    uploadedData.url && {
                    document: `${uploadedData.url}`,
                }), { assignedBy: {
                        connect: task.assignedBy,
                    }, assignedTo: {
                        connect: task.assignedTo,
                    } }, (task.categories && {
                    categories: {
                        connect: [...task.categories],
                    },
                }));
                return yield this.photonService.photon.tasks.create({ data: newTask });
            }
            catch (e) {
                throw e;
            }
        });
    }
    update(task, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let uploadedData = null;
            if (task.document) {
                uploadedData = yield this.uploadService.single({
                    filename: `tasks/${task.title}`,
                    base64: task.document.base64,
                });
            }
            const updateTask = Object.assign({}, task, (uploadedData &&
                uploadedData.url && { document: `${uploadedData.url}` }), { assignedBy: {
                    connect: task.assignedBy,
                }, assignedTo: {
                    connect: task.assignedTo,
                } }, (task.categories && {
                categories: {
                    connect: [...task.categories],
                },
            }));
            try {
                return yield this.photonService.photon.tasks.update({
                    data: updateTask,
                    where,
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
                return yield this.photonService.photon.tasks.delete({ where: where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    task(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.tasks.findOne({ where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    tasks(where, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.photonService.photon.tasks.findMany({
                    where: Object.assign({}, where, (user && { assignedTo: { id: user.id } })),
                });
                const high = yield this.photonService.photon.tasks.findMany({
                    where: Object.assign({ priority: 'HIGH', AND: { done: false } }, (user && { AND: { assignedTo: { id: user.id } } })),
                });
                const medium = yield this.photonService.photon.tasks.findMany({
                    where: Object.assign({ priority: 'MEDIUM', AND: { done: false } }, (user && { AND: { assignedTo: { id: user.id } } })),
                });
                const low = yield this.photonService.photon.tasks.findMany({
                    where: Object.assign({ priority: 'LOW', AND: { done: false } }, (user && { AND: { assignedTo: { id: user.id } } })),
                });
                return {
                    items: tasks,
                    counters: {
                        high: high.length,
                        medium: medium.length,
                        low: low.length,
                    },
                };
            }
            catch (e) {
                throw e;
            }
        });
    }
};
TaskService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [photon_service_1.PhotonService,
        upload_service_1.UploadService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map
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
const common_1 = require("@nestjs/common");
const guards_1 = require("../../guards");
const entities_1 = require("./entities");
const task_service_1 = require("./task.service");
const photon_service_1 = require("../../photon/photon.service");
const task_payload_1 = require("./entities/task-payload");
const user_decorator_1 = require("../user/decorator/user.decorator");
let TaskResolver = class TaskResolver {
    constructor(taskService, photonService) {
        this.taskService = taskService;
        this.photonService = photonService;
    }
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.create(data);
        });
    }
    updateTask(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.update(data, where);
        });
    }
    deleteTask(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.delete(where);
        });
    }
    tasks(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.tasks(where);
        });
    }
    userTasks(where, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.tasks(where, user);
        });
    }
    task(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.task(where);
        });
    }
    categories(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = task;
            const categories = yield this.photonService.photon.categories.findMany({
                where: { tasks: { some: { id } } },
            });
            return categories;
        });
    }
    assignedTo(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = task;
            const user = yield this.photonService.photon.users.findMany({
                where: { responsibleTasks: { some: { id } } },
            });
            return user[0];
        });
    }
    assignedBy(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = task;
            const user = yield this.photonService.photon.users.findMany({
                where: { createdTasks: { some: { id } } },
            });
            return user[0];
        });
    }
};
__decorate([
    graphql_1.Mutation(() => entities_1.Task),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskCreateInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createTask", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Task),
    __param(0, graphql_1.Args('data')),
    __param(1, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskUpdateInput,
        entities_1.TaskWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "updateTask", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Task),
    guards_1.Roles('ADM'),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "deleteTask", null);
__decorate([
    graphql_1.Query(() => task_payload_1.TaskPayload),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskWhereInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "tasks", null);
__decorate([
    graphql_1.Query(() => task_payload_1.TaskPayload),
    __param(0, graphql_1.Args('where')), __param(1, user_decorator_1.default()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskWhereInput, Object]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "userTasks", null);
__decorate([
    graphql_1.Query(() => entities_1.Task, { nullable: true }),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.TaskWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "task", null);
__decorate([
    graphql_1.ResolveProperty('categories'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "categories", null);
__decorate([
    graphql_1.ResolveProperty('assignedTo'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "assignedTo", null);
__decorate([
    graphql_1.ResolveProperty('assignedBy'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "assignedBy", null);
TaskResolver = __decorate([
    graphql_1.Resolver(() => entities_1.Task),
    common_1.UseGuards(guards_1.GqlAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        photon_service_1.PhotonService])
], TaskResolver);
exports.TaskResolver = TaskResolver;
//# sourceMappingURL=task.resolver.js.map
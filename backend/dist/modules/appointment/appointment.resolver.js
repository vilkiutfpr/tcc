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
const appointment_service_1 = require("./appointment.service");
const photon_service_1 = require("../../photon/photon.service");
const user_decorator_1 = require("../user/decorator/user.decorator");
let AppointmentResolver = class AppointmentResolver {
    constructor(appointmentService, photonService) {
        this.appointmentService = appointmentService;
        this.photonService = photonService;
    }
    createAppointment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.create(data);
        });
    }
    updateAppointment(data, where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.update(data, where);
        });
    }
    deleteAppointment(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.delete(where);
        });
    }
    appointments(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.appointments(where);
        });
    }
    appointmentsPerDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.appointmentsPerDate(date);
        });
    }
    billAppointment(where, billed) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.billAppointment(billed, where);
        });
    }
    appointment(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.appointment(where);
        });
    }
    getAppointmentSummary(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.appointmentService.summary(user.id);
        });
    }
    user(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = appointment;
            const user = yield this.photonService.photon.users.findMany({
                where: { appointments: { some: { id } } },
            });
            return user[0];
        });
    }
};
__decorate([
    graphql_1.Mutation(() => entities_1.Appointment),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentCreateInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "createAppointment", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Appointment),
    __param(0, graphql_1.Args('data')),
    __param(1, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentUpdateInput,
        entities_1.AppointmentWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "updateAppointment", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Appointment),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "deleteAppointment", null);
__decorate([
    graphql_1.Query(() => [entities_1.Appointment]),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentWhereInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "appointments", null);
__decorate([
    graphql_1.Query(() => [entities_1.Appointment]),
    __param(0, graphql_1.Args('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "appointmentsPerDate", null);
__decorate([
    graphql_1.Mutation(() => entities_1.Appointment),
    __param(0, graphql_1.Args('where')),
    __param(1, graphql_1.Args('billed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentWhereUniqueInput, Boolean]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "billAppointment", null);
__decorate([
    graphql_1.Query(() => entities_1.Appointment, { nullable: true }),
    __param(0, graphql_1.Args('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.AppointmentWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "appointment", null);
__decorate([
    graphql_1.Query(() => entities_1.AppointmentSummary),
    __param(0, user_decorator_1.default()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "getAppointmentSummary", null);
__decorate([
    graphql_1.ResolveProperty('user'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "user", null);
AppointmentResolver = __decorate([
    graphql_1.Resolver(() => entities_1.Appointment),
    common_1.UseGuards(guards_1.GqlAuthGuard, guards_1.RolesGuard),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService,
        photon_service_1.PhotonService])
], AppointmentResolver);
exports.AppointmentResolver = AppointmentResolver;
//# sourceMappingURL=appointment.resolver.js.map
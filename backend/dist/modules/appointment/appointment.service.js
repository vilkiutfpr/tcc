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
const date_fns_1 = require("date-fns");
let AppointmentService = class AppointmentService {
    constructor(photonService) {
        this.photonService = photonService;
    }
    create(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAppointment = Object.assign({}, appointment, { user: {
                        connect: appointment.user,
                    } });
                return yield this.photonService.photon.appointments.create({
                    data: newAppointment,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
    update(appointment, where) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateAppointment = Object.assign({}, appointment, { user: {
                    connect: appointment.user,
                } });
            try {
                return yield this.photonService.photon.appointments.update({
                    data: updateAppointment,
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
                return yield this.photonService.photon.appointments.delete({
                    where: where,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
    appointment(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.appointments.findOne({ where });
            }
            catch (e) {
                throw e;
            }
        });
    }
    appointments(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointments = yield this.photonService.photon.appointments.findMany({
                    where: Object.assign({}, this.configureWhere(where)),
                });
                return appointments;
            }
            catch (e) {
                throw e;
            }
        });
    }
    billAppointment(billed, where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.photonService.photon.appointments.update({
                    data: { billed },
                    where,
                });
            }
            catch (_a) { }
        });
    }
    appointmentsPerDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointments = yield this.photonService.photon.appointments.findMany({
                    where: {
                        OR: [
                            {
                                end: {
                                    lt: date_fns_1.addHours(new Date(date), 24),
                                    gt: new Date(date),
                                },
                            },
                            {
                                start: {
                                    lt: date_fns_1.addHours(new Date(date), 24),
                                    gt: new Date(date),
                                },
                            },
                        ],
                    },
                });
                return appointments;
            }
            catch (e) {
                throw e;
            }
        });
    }
    summary(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalList = (yield this.photonService.photon.appointments({
                where: { user: { id: userId } },
            })) || [];
            const billedList = (yield this.photonService.photon.appointments({
                where: {
                    user: { id: userId },
                    billed: true,
                },
            })) || [];
            const total = totalList.reduce((total, item) => (total += date_fns_1.differenceInHours(new Date(item.end), new Date(item.start))), 0);
            const billed = billedList.reduce((total, item) => (total += date_fns_1.differenceInHours(new Date(item.end), new Date(item.start))), 0);
            return { total, billed };
        });
    }
    configureWhere(where) {
        if (where.start && where.end) {
            return Object.assign({ user: where.user }, (where.start &&
                where.end && {
                OR: [
                    {
                        end: {
                            lt: new Date(where.end),
                            gt: new Date(where.start),
                        },
                    },
                    {
                        start: {
                            gt: new Date(where.start),
                            lt: new Date(where.end),
                        },
                    },
                ],
            }));
        }
        return Object.assign({ user: where.user }, (where.start && {
            OR: [
                {
                    end: {
                        lt: date_fns_1.addHours(new Date(where.start), 24),
                        gt: new Date(where.start),
                    },
                },
                {
                    start: {
                        lt: date_fns_1.addHours(new Date(where.start), 24),
                        gt: new Date(where.start),
                    },
                },
            ],
        }));
    }
};
AppointmentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [photon_service_1.PhotonService])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map
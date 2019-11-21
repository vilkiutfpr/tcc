"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const appointment_resolver_1 = require("./appointment.resolver");
const photon_module_1 = require("../../photon/photon.module");
const user_module_1 = require("../user/user.module");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    common_1.Module({
        imports: [photon_module_1.PhotonModule, user_module_1.UserModule],
        providers: [appointment_service_1.AppointmentService, appointment_resolver_1.AppointmentResolver],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;
//# sourceMappingURL=appointment.module.js.map
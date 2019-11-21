"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const fire_station_module_1 = require("./fire-station/fire-station.module");
const task_module_1 = require("./task/task.module");
const category_module_1 = require("./category/category.module");
const notice_module_1 = require("./notice/notice.module");
const appointment_module_1 = require("./appointment/appointment.module");
const upload_module_1 = require("./upload/upload.module");
let ModulesModule = class ModulesModule {
};
ModulesModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            fire_station_module_1.FireStationModule,
            task_module_1.TaskModule,
            category_module_1.CategoryModule,
            notice_module_1.NoticeModule,
            appointment_module_1.AppointmentModule,
            upload_module_1.UploadModule,
        ],
        providers: [],
    })
], ModulesModule);
exports.ModulesModule = ModulesModule;
//# sourceMappingURL=modules.module.js.map
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
const aws_1 = require("../../common/aws");
const date_fns_1 = require("date-fns");
let UploadService = class UploadService {
    constructor() {
        this.S3 = aws_1.S3GetInstance();
    }
    single(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const unkownUrl = `unknown/${date_fns_1.format(new Date(), 'yyyy-MM-dd_HH-mm-ss')}`;
            const type = file.base64.split(';')[0].split('/')[1];
            const content = file.base64.split(':')[1].split('/')[0];
            var fileWithoutMimeType = file.base64.match(/,(.*)$/)[1];
            const base64Data = Buffer.from(fileWithoutMimeType, 'base64');
            const params = {
                Key: `${file.filename.replace(/[^\w\-\/]+/g, '-').toLocaleLowerCase() ||
                    unkownUrl}.${type}`,
                Body: base64Data,
                ContentType: `${content}/${type}`,
            };
            return yield this.S3.uploadFile(params);
        });
    }
};
UploadService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map
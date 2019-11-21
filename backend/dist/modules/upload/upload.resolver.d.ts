import { UploadService } from './upload.service';
import { Upload } from './entities';
import { UploadResult } from './entities/upload-result';
export declare class UploadResolver {
    private uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: Upload): Promise<UploadResult>;
}

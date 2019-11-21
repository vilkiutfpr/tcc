import { Upload } from './entities';
import { S3Instance } from '../../common/aws';
import { UploadResult } from './entities';
export declare class UploadService {
    S3: S3Instance;
    constructor();
    single(file: Upload): Promise<UploadResult>;
}

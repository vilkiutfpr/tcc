import { S3 } from 'aws-sdk';
import { UploadResult } from '../../modules/upload/entities/upload-result';
export interface S3Instance {
    instance: S3;
    uploadFile: (params: Partial<S3.Types.PutObjectRequest>) => Promise<UploadResult>;
}
declare const S3GetInstance: () => S3Instance;
export { S3GetInstance };

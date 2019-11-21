import { S3 } from 'aws-sdk';
import { UploadResult } from '../../modules/upload/entities/upload-result';

export interface S3Instance {
  instance: S3;
  uploadFile: (
    params: Partial<S3.Types.PutObjectRequest>,
  ) => Promise<UploadResult>;
}

let s3 = null;

const uploadFile = (
  params: Partial<S3.Types.PutObjectRequest>,
): Promise<UploadResult> => {
  return new Promise((res, rej) => {
    let newParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      ContentEncoding: 'base64',
      ...params,
      ACL: 'public-read',
    };

    s3.instance.upload(newParams, function(err, data) {
      if (err) {
        throw rej(err);
      }
      res({ url: data.Location });
    });
  });
};

const S3GetInstance = (): S3Instance => {
  if (!s3) {
    return constructor();
  }

  return s3;
};

const constructor = () => {
  const instance = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  s3 = {
    instance,
    uploadFile,
  };

  return s3;
};

export { S3GetInstance };

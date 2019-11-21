import { Injectable } from '@nestjs/common';
import { Upload } from './entities';
import { S3GetInstance, S3Instance } from '../../common/aws';
import { format } from 'date-fns';
import { UploadResult } from './entities';

@Injectable()
export class UploadService {
  S3: S3Instance;

  constructor() {
    this.S3 = S3GetInstance();
  }

  public async single(file: Upload): Promise<UploadResult> {
    const unkownUrl = `unknown/${format(new Date(), 'yyyy-MM-dd_HH-mm-ss')}`;
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

    return await this.S3.uploadFile(params);
  }
}

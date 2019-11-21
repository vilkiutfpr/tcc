import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UploadService } from './upload.service';
import { Upload } from './entities';
import { UploadResult } from './entities/upload-result';
import { GqlAuthGuard } from '../../guards';

@Resolver('Upload')
@UseGuards(GqlAuthGuard)
export class UploadResolver {
  constructor(private uploadService: UploadService) {}

  @Mutation(() => UploadResult)
  public async uploadFile(@Args('file') file: Upload) {
    return this.uploadService.single(file);
  }
}

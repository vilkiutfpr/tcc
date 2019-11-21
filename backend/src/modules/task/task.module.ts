import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { PhotonModule } from '../../photon/photon.module';
import { UserModule } from '../user/user.module';
import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [PhotonModule, UserModule, UploadModule],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}

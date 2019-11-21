import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FireStationModule } from './fire-station/fire-station.module';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { NoticeModule } from './notice/notice.module';
import { AppointmentModule } from './appointment/appointment.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UserModule,
    FireStationModule,
    TaskModule,
    CategoryModule,
    NoticeModule,
    AppointmentModule,
    UploadModule,
  ],
  providers: [],
})
export class ModulesModule {}

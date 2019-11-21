import { Module } from '@nestjs/common';
import { NoticeResolver } from './notice.resolver';
import { NoticeService } from './notice.service';
import { PhotonModule } from '../../photon/photon.module';

@Module({
  imports: [PhotonModule],
  providers: [NoticeResolver, NoticeService],
})
export class NoticeModule {}

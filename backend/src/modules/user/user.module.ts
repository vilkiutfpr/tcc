import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PhotonModule } from '../../photon/photon.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PhotonModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}

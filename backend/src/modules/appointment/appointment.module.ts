import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { PhotonModule } from '../../photon/photon.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PhotonModule, UserModule],
  providers: [AppointmentService, AppointmentResolver],
})
export class AppointmentModule {}

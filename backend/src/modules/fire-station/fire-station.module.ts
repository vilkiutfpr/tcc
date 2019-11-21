import { Module } from '@nestjs/common';
import { FireStationResolver } from './fire-station.resolver';
import { PhotonModule } from '../../photon/photon.module';

@Module({
  imports: [PhotonModule],
  providers: [FireStationResolver],
})
export class FireStationModule {}

import { Injectable } from '@nestjs/common';
import { Photon } from '@generated/photon';

@Injectable()
export class PhotonService {
  photon = new Photon();
  constructor() {}

  disconnect() {
    this.photon.disconnect();
  }
}

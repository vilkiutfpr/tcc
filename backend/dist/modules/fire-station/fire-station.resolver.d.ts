import { PhotonService } from '../../photon/photon.service';
export declare class FireStationResolver {
    private photonService;
    constructor(photonService: PhotonService);
    users(user: any): Promise<import("@generated/photon").User[]>;
}

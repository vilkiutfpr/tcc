import { PhotonService } from '../../photon/photon.service';
import { NoticeCreateInput } from './entity/inputs/create.input';
import { NoticeUpdateInput, NoticeWhereUniqueInput, NoticeWhereInput } from './entity';
export declare class NoticeService {
    private photonService;
    constructor(photonService: PhotonService);
    create(notice: NoticeCreateInput): Promise<import("@generated/photon").Notice>;
    update(notice: NoticeUpdateInput, where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    delete(where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    notice(where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    notices(where: NoticeWhereInput): Promise<import("@generated/photon").Notice[]>;
    userNotices(where: NoticeWhereInput, userId: string): Promise<import("@generated/photon").Notice[]>;
    private changePayloadToPhoton;
}

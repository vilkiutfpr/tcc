import { NoticeService } from './notice.service';
import { NoticeCreateInput } from './entity/inputs/create.input';
import { NoticeWhereInput } from './entity';
import { NoticeUpdateInput } from './entity/inputs/update.input';
import { NoticeWhereUniqueInput } from './entity/inputs/where-unique.input';
import { PhotonService } from '../../photon/photon.service';
export declare class NoticeResolver {
    private noticeService;
    private photonService;
    constructor(noticeService: NoticeService, photonService: PhotonService);
    createNotice(data: NoticeCreateInput): Promise<import("@generated/photon").Notice>;
    updateNotice(data: NoticeUpdateInput, where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    deleteNotice(where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    notice(where: NoticeWhereUniqueInput): Promise<import("@generated/photon").Notice>;
    notices(where: NoticeWhereInput): Promise<import("@generated/photon").Notice[]>;
    userNotices(where: NoticeWhereInput, user: any): Promise<import("@generated/photon").Notice[]>;
    categories(notice: any): Promise<import("@generated/photon").Category[]>;
    createdBy(notice: any): Promise<import("@generated/photon").User>;
    assignedTo(notice: any): Promise<import("@generated/photon").User[]>;
    seenBy(notice: any): Promise<import("@generated/photon").User[]>;
}

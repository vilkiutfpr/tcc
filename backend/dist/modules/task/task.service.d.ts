import { PhotonService } from '../../photon/photon.service';
import { TaskCreateInput, TaskWhereUniqueInput, TaskUpdateInput, TaskWhereInput } from './entities';
import { UploadService } from '../upload/upload.service';
export declare class TaskService {
    private photonService;
    private uploadService;
    constructor(photonService: PhotonService, uploadService: UploadService);
    create(task: TaskCreateInput): Promise<import("@generated/photon").Task>;
    update(task: TaskUpdateInput, where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    delete(where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    task(where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    tasks(where: TaskWhereInput, user?: any): Promise<{
        items: import("@generated/photon").Task[];
        counters: {
            high: number;
            medium: number;
            low: number;
        };
    }>;
}

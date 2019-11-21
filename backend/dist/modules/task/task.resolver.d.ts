import { TaskCreateInput, TaskUpdateInput, TaskWhereUniqueInput, TaskWhereInput } from './entities';
import { TaskService } from './task.service';
import { PhotonService } from '../../photon/photon.service';
export declare class TaskResolver {
    private taskService;
    private photonService;
    constructor(taskService: TaskService, photonService: PhotonService);
    createTask(data: TaskCreateInput): Promise<any>;
    updateTask(data: TaskUpdateInput, where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    deleteTask(where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    tasks(where: TaskWhereInput): Promise<{
        items: import("@generated/photon").Task[];
        counters: {
            high: number;
            medium: number;
            low: number;
        };
    }>;
    userTasks(where: TaskWhereInput, user: any): Promise<{
        items: import("@generated/photon").Task[];
        counters: {
            high: number;
            medium: number;
            low: number;
        };
    }>;
    task(where: TaskWhereUniqueInput): Promise<import("@generated/photon").Task>;
    categories(task: any): Promise<import("@generated/photon").Category[]>;
    assignedTo(task: any): Promise<import("@generated/photon").User>;
    assignedBy(task: any): Promise<import("@generated/photon").User>;
}

import { FireStation } from '../../fire-station/entities';
import { Task } from '../../task/entities';
export declare enum EUserRole {
    BC = "BC",
    BM = "BM",
    ADM = "ADM"
}
export declare class User {
    id: string;
    name: string;
    email: string;
    role: EUserRole;
    fireStation: FireStation;
    responsibleTasks: Task[];
    createdTasks: Task[];
}

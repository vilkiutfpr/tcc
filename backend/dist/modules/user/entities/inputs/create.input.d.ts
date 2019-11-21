import { EUserRole } from '../user.entity';
import { FireStationRelationalInput } from '../../../fire-station/entities';
import { TaskRelationalInput } from '../../../task/entities';
export declare class UserCreateInput {
    name: string;
    email: string;
    password: string;
    role: EUserRole;
    fireStation: FireStationRelationalInput;
    responsibleTasks?: TaskRelationalInput[];
    createdTasks?: TaskRelationalInput[];
}

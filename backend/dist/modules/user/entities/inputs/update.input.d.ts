import { EUserRole } from '../user.entity';
import { FireStationRelationalInput } from '../../../fire-station/entities';
export declare class UserUpdateInput {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    role?: EUserRole;
    fireStation: FireStationRelationalInput;
}

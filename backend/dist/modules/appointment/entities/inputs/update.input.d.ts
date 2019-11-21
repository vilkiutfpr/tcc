import { UserRelationalInput } from '../../../user/entities';
export declare class AppointmentUpdateInput {
    id?: string;
    start: Date;
    end: Date;
    user: UserRelationalInput;
}

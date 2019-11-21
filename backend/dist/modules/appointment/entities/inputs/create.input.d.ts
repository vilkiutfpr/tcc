import { UserRelationalInput } from '../../../user/entities';
export declare class AppointmentCreateInput {
    start: Date;
    end: Date;
    user: UserRelationalInput;
}

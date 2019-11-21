import { User } from '../../user/entities';
export declare class Appointment {
    id: string;
    start: Date;
    end: Date;
    user: User;
    billed: boolean;
}

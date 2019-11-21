import { UserRelationalInput } from '../../../user/entities';
export declare class AppointmentWhereInput {
    id?: string;
    start: string;
    end: string;
    billed?: boolean;
    user?: UserRelationalInput;
    OR?: AppointmentWhereInput | AppointmentWhereInput[];
}

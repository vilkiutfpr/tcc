import { EPriority } from '../../../../common/enums';
export declare class TaskWhereInput {
    id?: string;
    title: string;
    description: string;
    address: string;
    done: boolean;
    priority: EPriority;
    date: Date;
}

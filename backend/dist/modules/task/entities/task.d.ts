import { User } from '../../user/entities';
import { Category } from '../../category/entities';
import { EPriority } from '../../../common/enums';
export declare class Task {
    id: string;
    title: string;
    description: string;
    address: string;
    done: boolean;
    document?: string;
    priority: EPriority;
    date: Date;
    categories?: Category[];
    assignedTo: User;
    assignedBy: User;
}

import { User } from '../../user/entities';
import { EPriority } from '../../../common/enums';
import { Category } from '../../category/entities';
export declare class Notice {
    id: string;
    title: string;
    description: string;
    seenBy: User[];
    assignedTo: User[];
    createdBy: User;
    priority: EPriority;
    categories: Category[];
}

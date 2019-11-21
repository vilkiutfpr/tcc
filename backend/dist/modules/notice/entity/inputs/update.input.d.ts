import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';
import { EPriority } from '../../../../common/enums';
export declare class NoticeUpdateInput {
    id: string;
    title: string;
    description: string;
    seenBy: UserRelationalInput[];
    assignedTo: UserRelationalInput[];
    createdBy: UserRelationalInput;
    priority: EPriority;
    categories: CategoryRelationalInput[];
}

import { CategoryRelationalInput } from '../../../category/entities';
import { UserRelationalInput } from '../../../user/entities';
import { EPriority } from '../../../../common/enums';
export declare class NoticeCreateInput {
    title: string;
    description: string;
    seenBy?: UserRelationalInput[];
    assignedTo: UserRelationalInput[];
    createdBy: UserRelationalInput;
    priority: EPriority;
    categories: CategoryRelationalInput[];
}

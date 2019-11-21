import { EPriority } from '../../../../common/enums';
import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';
export declare class NoticeWhereInput {
    id?: string;
    title: string;
    description: string;
    seenBy: UserRelationalInput[];
    assignedTo: UserRelationalInput[];
    createdBy: UserRelationalInput;
    priority: EPriority;
    categories: CategoryRelationalInput[];
}

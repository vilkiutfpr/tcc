import { CategoryRelationalInput } from '../../../category/entities';
import { UserRelationalInput } from '../../../user/entities';
import { EPriority } from '../../../../common/enums';
import { Upload } from '../../../upload/entities';
export declare class TaskCreateInput {
    title: string;
    description: string;
    priority: EPriority;
    address: string;
    date: Date;
    done: boolean;
    document?: Upload;
    categories?: CategoryRelationalInput[];
    assignedTo: UserRelationalInput;
    assignedBy: UserRelationalInput;
}

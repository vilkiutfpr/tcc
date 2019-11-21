import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';
import { EPriority } from '../../../../common/enums';
import { Upload } from '../../../upload/entities';
export declare class TaskUpdateInput {
    id?: string;
    title: string;
    description: string;
    priority: EPriority;
    address: string;
    done: boolean;
    date: Date;
    document: Upload;
    categories?: CategoryRelationalInput[];
    assignedTo: UserRelationalInput;
    assignedBy: UserRelationalInput;
}

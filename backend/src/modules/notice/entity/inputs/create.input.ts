import { ArgsType, InputType, Field } from 'type-graphql';
import { CategoryRelationalInput } from '../../../category/entities';
import { UserRelationalInput } from '../../../user/entities';
import { EPriority } from '../../../../common/enums';

@ArgsType()
@InputType('NoticeCreateInput')
export class NoticeCreateInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [UserRelationalInput])
  seenBy?: UserRelationalInput[];

  @Field(() => [UserRelationalInput])
  assignedTo: UserRelationalInput[];

  @Field(() => UserRelationalInput)
  createdBy: UserRelationalInput;

  @Field(() => EPriority)
  priority: EPriority;

  @Field(() => [CategoryRelationalInput])
  categories: CategoryRelationalInput[];
}

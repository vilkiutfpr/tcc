import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';
import { EPriority } from '../../../../common/enums';

@ArgsType()
@InputType('NoticeUpdateInput')
export class NoticeUpdateInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [UserRelationalInput], { nullable: true })
  seenBy: UserRelationalInput[];

  @Field(() => [UserRelationalInput], { nullable: true })
  assignedTo: UserRelationalInput[];

  @Field(() => UserRelationalInput, { nullable: true })
  createdBy: UserRelationalInput;

  @Field(() => EPriority, { nullable: true })
  priority: EPriority;

  @Field(() => [CategoryRelationalInput], { nullable: true })
  categories: CategoryRelationalInput[];
}

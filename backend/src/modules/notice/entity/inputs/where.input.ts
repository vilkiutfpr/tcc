import { Field, InputType, ArgsType } from 'type-graphql';
import { EPriority } from '../../../../common/enums';
import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';

@ArgsType()
@InputType('NoticeWhereInput')
export class NoticeWhereInput {
  @Field({ nullable: true })
  id?: string;

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

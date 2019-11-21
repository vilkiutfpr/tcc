import { ArgsType, InputType, Field } from 'type-graphql';
import { CategoryRelationalInput } from '../../../category/entities';
import { UserRelationalInput } from '../../../user/entities';
import { EPriority } from '../../../../common/enums';
import { Upload } from '../../../upload/entities';

@ArgsType()
@InputType('TaskCreateInput')
export class TaskCreateInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => EPriority)
  priority: EPriority;

  @Field()
  address: string;

  @Field(() => Date)
  date: Date;

  @Field()
  done: boolean;

  @Field(() => Upload, { nullable: true })
  document?: Upload;

  @Field(() => [CategoryRelationalInput], { nullable: true })
  categories?: CategoryRelationalInput[];

  @Field(() => UserRelationalInput)
  assignedTo: UserRelationalInput;

  @Field(() => UserRelationalInput)
  assignedBy: UserRelationalInput;
}

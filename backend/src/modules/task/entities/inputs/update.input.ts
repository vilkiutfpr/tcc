import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { UserRelationalInput } from '../../../user/entities';
import { CategoryRelationalInput } from '../../../category/entities';
import { EPriority } from '../../../../common/enums';
import { Upload } from '../../../upload/entities';

@ArgsType()
@InputType('TaskUpdateInput')
export class TaskUpdateInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => EPriority, { nullable: true })
  priority: EPriority;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  done: boolean;

  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => Upload, { nullable: true })
  document: Upload;

  @Field(() => [CategoryRelationalInput], { nullable: true })
  categories?: CategoryRelationalInput[];

  @Field(() => UserRelationalInput, { nullable: true })
  assignedTo: UserRelationalInput;

  @Field(() => UserRelationalInput, { nullable: true })
  assignedBy: UserRelationalInput;
}

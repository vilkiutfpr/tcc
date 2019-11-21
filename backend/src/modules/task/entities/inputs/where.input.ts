import { Field, InputType, ArgsType } from 'type-graphql';
import { EPriority } from '../../../../common/enums';

@ArgsType()
@InputType('TaskWhereInput')
export class TaskWhereInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  done: boolean;

  @Field(() => EPriority, { nullable: true })
  priority: EPriority;

  @Field(() => Date, { nullable: true })
  date: Date;
}

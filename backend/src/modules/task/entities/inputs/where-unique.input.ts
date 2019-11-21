import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('TaskWhereUniqueInput')
export class TaskWhereUniqueInput {
  @Field({ nullable: true })
  id?: string;
}

import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('NoticeWhereUniqueInput')
export class NoticeWhereUniqueInput {
  @Field({ nullable: true })
  id?: string;
}

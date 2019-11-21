import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('CategoryWhereUniqueInput')
export class CategoryWhereUniqueInput {
  @Field({ nullable: true })
  id?: string;
}

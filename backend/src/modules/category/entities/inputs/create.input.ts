import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('CategoryCreateInput')
export class CategoryCreateInput {
  @Field()
  name: string;
}

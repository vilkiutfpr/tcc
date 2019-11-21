import { ArgsType, InputType, Field, ID } from 'type-graphql';

@ArgsType()
@InputType('CategoryUpdateInput')
export class CategoryUpdateInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  name: string;
}

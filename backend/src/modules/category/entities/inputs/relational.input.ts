import { ArgsType, InputType, Field, ID } from 'type-graphql';

@ArgsType()
@InputType('CategoryRelationalInput')
export class CategoryRelationalInput {
  @Field(() => ID)
  id: string;
}

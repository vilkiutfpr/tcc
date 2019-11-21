import { Field, InputType, ArgsType } from 'type-graphql';

@ArgsType()
@InputType('CategoryWhereInput')
export class CategoryWhereInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name: string;
}

import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { EUserRole } from '../user.entity';

@ArgsType()
@InputType('UserWhereUniqueInput')
export class UserWhereUniqueInput {
  @Field(() => ID!, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  role?: EUserRole;
}

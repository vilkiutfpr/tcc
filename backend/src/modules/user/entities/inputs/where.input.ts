import { Field, Int, InputType, ArgsType } from 'type-graphql';
import { EUserRole } from '../user.entity';

@ArgsType()
@InputType('UserWhereInput')
export class UserWhereInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  role?: EUserRole;
}

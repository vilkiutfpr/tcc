import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { EUserRole } from '../user.entity';
import { FireStationRelationalInput } from '../../../fire-station/entities';

@ArgsType()
@InputType('UserUpdateInput')
export class UserUpdateInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  role?: EUserRole;

  @Field(() => FireStationRelationalInput, { nullable: true })
  fireStation: FireStationRelationalInput;
}

import { ArgsType, InputType, Field } from 'type-graphql';
import { UserRelationalInput } from '../../../user/entities';

@ArgsType()
@InputType('AppointmentCreateInput')
export class AppointmentCreateInput {
  @Field()
  start: Date;

  @Field()
  end: Date;

  @Field(() => UserRelationalInput)
  user: UserRelationalInput;
}

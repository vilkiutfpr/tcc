import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { UserRelationalInput } from '../../../user/entities';

@ArgsType()
@InputType('AppointmentUpdateInput')
export class AppointmentUpdateInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  start: Date;

  @Field({ nullable: true })
  end: Date;

  @Field(() => UserRelationalInput)
  user: UserRelationalInput;
}

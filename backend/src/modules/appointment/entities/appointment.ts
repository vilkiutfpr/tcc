import { ObjectType, ID, Field } from 'type-graphql';
import { User } from '../../user/entities';

@ObjectType()
export class Appointment {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;

  @Field(() => User)
  user: User;

  @Field({ nullable: true })
  billed: boolean;
}

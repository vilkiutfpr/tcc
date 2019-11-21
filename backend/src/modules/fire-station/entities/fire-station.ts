import { Field, ObjectType, ID } from 'type-graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class FireStation {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [User!]!)
  users: User[];
}

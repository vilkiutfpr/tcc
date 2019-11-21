import { Field, ObjectType } from 'type-graphql';
import { User } from '../../modules/user/entities/user.entity';

@ObjectType()
export class Auth {
  @Field()
  token: string;

  @Field()
  user: User;
}

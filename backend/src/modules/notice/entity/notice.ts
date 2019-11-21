import { ObjectType, ID, Field } from 'type-graphql';
import { User } from '../../user/entities';
import { EPriority } from '../../../common/enums';
import { Category } from '../../category/entities';

@ObjectType()
export class Notice {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [User])
  seenBy: User[];

  @Field(() => [User])
  assignedTo: User[];

  @Field(() => User)
  createdBy: User;

  @Field(() => EPriority)
  priority: EPriority;

  @Field(() => [Category])
  categories: Category[];
}

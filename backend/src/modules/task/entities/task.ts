import { ObjectType, Field, ID } from 'type-graphql';
import { User } from '../../user/entities';
import { Category } from '../../category/entities';
import { EPriority } from '../../../common/enums';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  address: string;

  @Field()
  done: boolean;

  @Field({ nullable: true })
  document?: string;

  @Field(() => EPriority)
  priority: EPriority;

  @Field(() => Date)
  date: Date;

  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @Field(() => User)
  assignedTo: User;

  @Field(() => User)
  assignedBy: User;
}

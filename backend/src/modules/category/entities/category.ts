import { ObjectType, Field, ID } from 'type-graphql';
import { Task } from '../../task/entities';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Task])
  tasks: Task[];
}

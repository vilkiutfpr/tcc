import { ObjectType, Field } from 'type-graphql';
import { Task } from './task';

@ObjectType()
export class Counters {
  @Field({ nullable: true })
  high: number;

  @Field({ nullable: true })
  medium: number;

  @Field({ nullable: true })
  low: number;
}

@ObjectType()
export class TaskPayload {
  @Field(() => [Task])
  items: Task[];

  @Field(() => Counters)
  counters: Counters;
}

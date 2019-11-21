import { Field, ObjectType, ID, registerEnumType } from 'type-graphql';
import { FireStation } from '../../fire-station/entities';
import { Task } from '../../task/entities';

export enum EUserRole {
  BC = 'BC',
  BM = 'BM',
  ADM = 'ADM',
}

registerEnumType(EUserRole, {
  name: 'UserRole',
});

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  role: EUserRole;

  @Field(() => FireStation!)
  fireStation: FireStation;

  @Field(() => [Task])
  responsibleTasks: Task[];

  @Field(() => [Task])
  createdTasks: Task[];
}

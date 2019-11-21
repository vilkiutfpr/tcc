import { ArgsType, InputType, Field } from 'type-graphql';
import { EUserRole } from '../user.entity';
import { FireStationRelationalInput } from '../../../fire-station/entities';
import { TaskRelationalInput } from '../../../task/entities';

@ArgsType()
@InputType('UserCreateInput')
export class UserCreateInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: EUserRole;

  @Field(() => FireStationRelationalInput)
  fireStation: FireStationRelationalInput;

  @Field(() => [TaskRelationalInput], { nullable: true })
  responsibleTasks?: TaskRelationalInput[];

  @Field(() => [TaskRelationalInput], { nullable: true })
  createdTasks?: TaskRelationalInput[];
}

import { Field, InputType, ArgsType, ID, InterfaceType } from 'type-graphql';
import { UserRelationalInput } from '../../../user/entities';

import { createUnionType } from 'type-graphql';

const Xpto = createUnionType({
  name: 'DateTimeFilter', // the name of the GraphQL union
  types: () => [Date, String], // function that returns array of object types classes
});

@ArgsType()
@InputType('AppointmentWhereInput')
export class AppointmentWhereInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  start: string;

  @Field({ nullable: true })
  end: string;

  @Field({ nullable: true })
  billed?: boolean;

  @Field(() => UserRelationalInput, { nullable: true })
  user?: UserRelationalInput;

  @Field(() => [AppointmentWhereInput], { nullable: true })
  OR?: AppointmentWhereInput | AppointmentWhereInput[];
}

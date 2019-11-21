import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('AppointmentWhereUniqueInput')
export class AppointmentWhereUniqueInput {
  @Field({ nullable: true })
  id?: string;
}

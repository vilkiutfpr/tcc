import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class AppointmentSummary {
  @Field(() => Number)
  total: number;

  @Field(() => Number)
  billed: number;
}

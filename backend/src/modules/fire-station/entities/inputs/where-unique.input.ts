import { ArgsType, InputType, Field } from 'type-graphql';

@ArgsType()
@InputType('FireStationWhereUniqueInput')
export class FireStationWhereUniqueInput {
  @Field({ nullable: true })
  id?: string;
}

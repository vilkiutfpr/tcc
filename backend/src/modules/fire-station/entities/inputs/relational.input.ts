import { ArgsType, InputType } from 'type-graphql';
import { FireStationWhereUniqueInput } from './where-unique.input';

@ArgsType()
@InputType('FireStationRelationalInput')
export class FireStationRelationalInput extends FireStationWhereUniqueInput {}

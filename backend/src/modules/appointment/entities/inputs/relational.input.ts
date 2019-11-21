import { ArgsType, InputType } from 'type-graphql';
import { AppointmentWhereUniqueInput } from './where-unique.input';

@ArgsType()
@InputType('AppointmentRelationalInput')
export class AppointmentRelationalInput extends AppointmentWhereUniqueInput {}

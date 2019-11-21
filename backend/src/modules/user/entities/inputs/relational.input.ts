import { ArgsType, InputType, Field, ID } from 'type-graphql';
import { UserWhereUniqueInput } from './where-unique.input';

@ArgsType()
@InputType('UserRelationalInput')
export class UserRelationalInput extends UserWhereUniqueInput {}

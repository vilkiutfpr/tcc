import { ArgsType, InputType } from 'type-graphql';
import { NoticeWhereUniqueInput } from './where-unique.input';

@ArgsType()
@InputType('NoticeRelationalInput')
export class NoticeRelationalInput extends NoticeWhereUniqueInput {}

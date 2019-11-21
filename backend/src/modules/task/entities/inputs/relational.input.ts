import { ArgsType, InputType } from 'type-graphql';
import { TaskWhereUniqueInput } from './where-unique.input';

@ArgsType()
@InputType('TaskRelationalInput')
export class TaskRelationalInput extends TaskWhereUniqueInput {}

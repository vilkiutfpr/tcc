import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { format } from 'date-fns';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(`${value}`);
  }

  serialize(value: Date): string {
    return format(new Date(`${value}`), 'yyyy-MM-dd HH:mm');
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.STRING) {
      return new Date(`${ast.value}`);
    }
    return null;
  }
}

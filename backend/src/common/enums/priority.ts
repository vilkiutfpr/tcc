import { registerEnumType } from 'type-graphql';

export enum EPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

registerEnumType(EPriority, {
  name: 'Priority',
});

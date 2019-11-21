import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UploadResult {
  @Field()
  url: string;
}

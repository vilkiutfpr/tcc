import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
@InputType('UploadInput')
export class Upload {
  @Field({ nullable: true })
  filename?: string;

  @Field()
  base64: string;
}

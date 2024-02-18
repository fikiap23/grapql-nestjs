import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}

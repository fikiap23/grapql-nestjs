import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('UserSetting')
export class UserSetting {
  @Field((type) => Int)
  userId: number;

  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Field({ defaultValue: false })
  receiveEmails: boolean;
}

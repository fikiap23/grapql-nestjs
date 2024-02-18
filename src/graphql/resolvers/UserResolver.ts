import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';

@Resolver('User')
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      username: 'test',
      displayName: 'test display name',
    };
  }
}

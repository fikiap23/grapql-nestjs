import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';

@Resolver('User')
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query((returns) => [User])
  getAllUsers() {
    return mockUsers;
  }
}

import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { UserSetting } from '../models/UserSetting';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query((returns) => [User])
  getAllUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSetting(@Parent() user: User) {
    // console.log(user);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }
}

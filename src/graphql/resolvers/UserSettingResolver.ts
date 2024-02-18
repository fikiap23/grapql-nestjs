import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver('UserSetting')
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSetting(
    @Args('createUserSettingData') createSettingData: CreateUserSettingInput,
  ) {
    console.log(createSettingData);
    mockUserSettings.push(createSettingData);
    return createSettingData;
  }
}

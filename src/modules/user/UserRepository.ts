import { UserDatasource } from './UserDatasource';

export class UserRepository {
  private datasource: UserDatasource;
  constructor(private token?: string) {
    this.datasource = new UserDatasource(token);
  }

  async loginWithGithubAuthCode(authCode: string) {
    try {
      const result = await this.datasource.loginWithGithubAuthCode(authCode);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

import { AppBackendApiEndPoint } from '@/config/AppBackendApiEndPoint';

export class UserDatasource {
  private token?: string;
  constructor(token?: string) {
    this.token = token;
  }

  async loginWithGithubAuthCode(authCode: string) {
    console.log('데이터소스', authCode);
    console.log(AppBackendApiEndPoint.postGitHubAuthenticationCode());
    try {
      const response = await fetch(
        AppBackendApiEndPoint.postGitHubAuthenticationCode(),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authCode: authCode }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to authenticate with GitHub');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

import { AppEnv } from './AppEnv';

export const AppBackendApiEndPoint = {
  // user
  postGitHubAuthenticationCode: () => {
    return `${AppEnv.SERVET_API_URL}/auth/github`;
  },
};

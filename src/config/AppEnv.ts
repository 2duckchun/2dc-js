import { assertValue } from '@/lib/assertions';

export const AppEnv = {
  SERVET_API_URL: assertValue(
    process.env.SERVER_API_URL,
    '서버 API URL이 설정되지 않았습니다.',
  ),
};

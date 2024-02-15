import { NextRequest } from 'next/server';

import { UserRepository } from '@/modules/user/UserRepository';

export async function POST(req: NextRequest) {
  const { authCode } = await req.json();
  try {
    const repository = new UserRepository();
    const result = await repository.loginWithGithubAuthCode(authCode);
    return Response.json(result, { status: 200 });
  } catch (error) {
    return new Response('Failed to authenticate with GitHub', { status: 500 });
  }
}

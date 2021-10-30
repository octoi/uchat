import { useRouter } from 'next/router';
import { ChildrenProps } from '@/types/default.types';
import { userStore } from '@/state/user.state';
import { useState } from '@hookstate/core';

export default function AuthChecker({ children }: ChildrenProps) {
  const userState = useState(userStore);
  const router = useRouter();

  if (!userState.get()) {
    router.push('/account/login');
  }

  return <div>{children}</div>;
}

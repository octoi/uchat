import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChildrenProps } from '@/types/default.types';
import { userStore } from '@/state/user.state';
import { useState } from '@hookstate/core';
import { Paths } from '@/utils/constants';

const redirectBlacklistedPaths = ['/account/login', '/account/register'];

export default function AuthChecker({ children }: ChildrenProps) {
  const userState = useState(userStore);
  const router = useRouter();

  const user = userState.get();

  useEffect(() => {
    const pathname = router.pathname;

    if (!user) {
      if (redirectBlacklistedPaths.includes(pathname)) return;
      router.push(Paths.login);
    } else {
      if (!redirectBlacklistedPaths.includes(pathname)) return;
      router.push(Paths.app);
    }
  }, [user, router]);

  return <div>{children}</div>;
}

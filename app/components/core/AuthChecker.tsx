import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChildrenProps } from '@/types/default.types';
import { userStore } from '@/state/user.state';
import { useState } from '@hookstate/core';
import { Paths } from '@/utils/constants';

export default function AuthChecker({ children }: ChildrenProps) {
  const userState = useState(userStore);
  const router = useRouter();

  const user = userState.get();

  useEffect(() => {
    if (!user) {
      router.push(Paths.register);
    }
  }, [user]);

  return <div>{children}</div>;
}

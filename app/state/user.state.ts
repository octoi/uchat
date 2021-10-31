import { UserType } from '@/types/user.types';
import { getUserFromCookie } from '@/utils/jwt';
import { createState } from '@hookstate/core';

let defaultUserState: UserType | null = null;

getUserFromCookie().then((userData: any) => {
  defaultUserState = userData;
});

export const userStore = createState<UserType | null>(defaultUserState);

import { UserType } from '@/types/user.types';
import { createState } from '@hookstate/core';

export const userStore = createState<UserType | null>(null);

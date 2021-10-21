// All database stuffs for users

import { log } from '../utils/log';
import { registerArgs } from '../utils/types';
import { prismaClient } from './prisma';

export const registerUser = (data: registerArgs) => {
  return new Promise((resolve, reject) => {
    prismaClient.user
      .create({ data })
      .then(resolve)
      .catch(() => {
        reject(`User exits with email ${data.email}`);
      });
  });
};

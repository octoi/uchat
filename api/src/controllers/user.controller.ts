// All database stuffs for users

import { registerArgs } from '../utils/types';
import { prismaClient } from './prisma';

export const registerUser = (data: registerArgs) => {
  return new Promise((resolve, reject) => {
    prismaClient.user
      .create({ data })
      .then(resolve)
      .catch((err) => {
        if (err.code === 'P2002') {
          reject(`${data.email} already exist`);
        }
        reject('failed to register user');
      });
  });
};

// All database stuffs for users

import { loginArgs, registerArgs } from '../utils/types';
import { prismaClient } from './prisma';
import bcrypt from 'bcrypt';

export const registerUser = (data: registerArgs) => {
  return new Promise(async (resolve, reject) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    prismaClient.user
      .create({
        data: {
          ...data,
          password: hashedPassword,
        },
      })
      .then(resolve)
      .catch((err) => {
        if (err.code === 'P2002') {
          reject(`${data.email} already exist`);
        }
        reject('Failed to register user');
      });
  });
};

export const loginUser = (data: loginArgs) => {
  return new Promise(async (resolve, reject) => {
    const user: any = await findUser(data.email).catch(reject);
    if (!user) return;

    bcrypt.compare(data.password, user.password, (err, res) => {
      if (err) return reject('Failed to validate password');
      if (!res) return reject('Invalid password');
      resolve(user);
    });
  });
};

export const findUser = (email: string) => {
  return new Promise((resolve, reject) => {
    prismaClient.user
      .findUnique({ where: { email } })
      .then((user) => {
        if (!user) {
          reject(`Failed to find user with email ${email}`);
          return;
        }
        resolve(user);
      })
      .catch(() => {
        reject(`Failed to find user with email ${email}`);
      });
  });
};

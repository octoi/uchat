// All database stuffs for users

import { loginArgs, registerArgs, updateArgs } from '../utils/types';
import { prismaClient } from './prisma';
import bcrypt from 'bcrypt';
import { getRoom } from './room.model';

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

export const updateUser = (data: updateArgs) => {
  return new Promise(async (resolve, reject) => {
    const user: any = await findUser(data.ogEmail).catch(reject);
    if (!user) return;

    if (data.isNewPassword) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    prismaClient.user
      .update({
        where: { id: data.id },
        data: {
          name: data.name,
          email: data.email,
          profile: data.profile,
          password: data.password,
        },
      })
      .then(resolve)
      .catch((err) => {
        console.log(err);
        reject('Failed to update user');
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

export const joinRoom = (roomId: string, userId: number) => {
  return new Promise(async (resolve, reject) => {
    const room: any = await getRoom(roomId);

    prismaClient.user
      .update({
        where: { id: userId },
        data: {
          joinedRooms: {
            set: { roomId },
          },
        },
      })
      .then(() => resolve(room))
      .catch((err) => {
        console.log(err);
        reject(`Failed to join room ${roomId}`);
      });
  });
};

export const leaveRoom = (roomId: string, userId: number) => {
  return new Promise(async (resolve, reject) => {
    const room: any = await getRoom(roomId);

    prismaClient.user
      .update({
        where: { id: userId },
        data: {
          joinedRooms: {
            delete: { roomId },
          },
        },
      })
      .then(() => resolve(`Left from '${room.title}' successfully`))
      .catch((err) => {
        console.log(err);
        reject(`Failed to leave room ${roomId}`);
      });
  });
};

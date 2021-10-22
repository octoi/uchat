import { createRoomArgs } from '../utils/types';
import { uuid } from '../utils/uuid';
import { prismaClient } from './prisma';

export const createRoom = (data: createRoomArgs, userId: number) => {
  return new Promise((resolve, reject) => {
    prismaClient.room
      .create({
        data: {
          ...data,
          creatorId: userId,
          roomId: uuid(),
        },
      })
      .then(resolve)
      .catch((err) => {
        console.log(err);
        reject('Failed to create room');
      });
  });
};

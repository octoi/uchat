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
      .catch(() => {
        reject('Failed to create room');
      });
  });
};

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    prismaClient.room
      .findMany({
        include: {
          creator: true,
        },
      })
      .then(resolve)
      .catch(() => {
        reject('Failed to get rooms');
      });
  });
};

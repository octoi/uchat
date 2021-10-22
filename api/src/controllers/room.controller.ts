import { UserInputError } from 'apollo-server-core';
import { createRoom } from '../models/room.model';
import { createRoomArgs } from '../utils/types';

export const createRoomController = async (
  args: createRoomArgs,
  userId: number
) => {
  const room: any = await createRoom(args, userId).catch((err) => {
    throw new UserInputError(err);
  });

  return room;
};

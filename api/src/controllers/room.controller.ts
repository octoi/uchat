import { UserInputError, HttpQueryError } from 'apollo-server-core';
import { createRoom, getRooms } from '../models/room.model';
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

export const getRoomsController = async () => {
  const rooms: any = await getRooms().catch((err) => {
    throw new HttpQueryError(500, err);
  });

  return rooms;
};

import { UserInputError, HttpQueryError } from 'apollo-server-core';
import { createRoom, getRoom, getRooms } from '../models/room.model';
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

export const getRoomController = async (roomId: string) => {
  const room: any = await getRoom(roomId).catch((err) => {
    throw new HttpQueryError(400, err);
  });

  return room;
};

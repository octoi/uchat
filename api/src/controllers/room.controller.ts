import { UserInputError, HttpQueryError } from 'apollo-server-core';
import {
  createRoom,
  deleteRoom,
  getAllRoomData,
  getRoom,
  getRooms,
  getSearchResult,
} from '../models/room.model';
import { joinRoom, leaveRoom } from '../models/user.model';
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

export const deleteRoomController = async (roomId: string, userId: string) => {
  return await deleteRoom(roomId, userId).catch((err) => {
    throw new HttpQueryError(500, err);
  });
};

export const joinRoomController = async (roomId: string, userId: number) => {
  return await joinRoom(roomId, userId).catch((err) => {
    throw new HttpQueryError(500, err);
  });
};

export const leaveRoomController = async (roomId: string, userId: number) => {
  return await leaveRoom(roomId, userId).catch((err) => {
    throw new HttpQueryError(500, err);
  });
};

export const searchRoomController = async (searchQuery: string) => {
  return await getSearchResult(searchQuery).catch((err) => {
    throw new HttpQueryError(500, err);
  });
};

// dev
export const getRoomDataController = async (roomId: string) => {
  return await getAllRoomData(roomId).catch((err) => {
    throw new HttpQueryError(500, err);
  });
};

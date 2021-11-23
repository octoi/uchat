import { deleteData, getData, setData } from '../models/redis.model';
import { log } from '../utils/log';

export const saveUserDataController = async (
  socketId: string,
  roomId: string,
  userId: number
) => {
  await setData(socketId, roomId, userId).catch(log.error);
};

export const getAndDeleteDataController = async (
  socketId: string
): Promise<{ socketId: string; roomId: string; userId: number }> => {
  const data: any = await getData(socketId).catch(log.error);
  await deleteData(socketId).catch(log.error);
  return data;
};

export const getDataController = async (
  socketId: string
): Promise<{ socketId: string; roomId: string; userId: number }> => {
  const data: any = await getData(socketId).catch(log.error);
  return data;
};

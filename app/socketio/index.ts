import { socketStore } from '@/state/socket.state';
import { userStore } from '@/state/user.state';
import { AppSocket } from '@/types/socket.types';
import { SOCKET_SERVER } from '@/utils/constants';
import { Downgraded } from '@hookstate/core';
import io from 'socket.io-client';

const socketServerURL = process.env.SOCKET_SERVER || SOCKET_SERVER;

export const connectSocketClientToServer = (roomId: string) => {
  const socketIo: AppSocket = io(socketServerURL);
  const user = userStore.get();

  socketStore.set(socketIo);
  if (!user) return;
  socketIo.emit('joinRoom', {
    sender: {
      name: user.name,
      userId: parseInt(user.id),
    },
    roomId,
  });
};

export const clearChatForAll = (roomId: string) => {
  const socketIo = socketStore.attach(Downgraded).get();

  if (!socketIo) return;
  socketIo.emit('clearChat', { roomId });
};

import { socketState } from '@/state/socket.state';
import { userStore } from '@/state/user.state';
import { SOCKET_SERVER } from '@/utils/constants';
import io from 'socket.io-client';

const socketServerURL = process.env.SOCKET_SERVER || SOCKET_SERVER;

export const connectSocketClientToServer = (roomId: string) => {
  const socketIo = io(socketServerURL);
  const user = userStore.get();

  socketState.set(socketIo);
  if (!user) return;
  socketIo.emit('joinRoom', {
    sender: {
      name: user.name,
    },
    roomId,
  });
  socketIo.on('message', (msg) => {
    console.log(msg);
  });
};

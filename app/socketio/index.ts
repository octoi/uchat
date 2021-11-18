import { socketState } from '@/state/socket.state';
import { SOCKET_SERVER } from '@/utils/constants';
import io from 'socket.io-client';

const socketServerURL = process.env.SOCKET_SERVER || SOCKET_SERVER;

export const connectSocketClientToServer = () => {
  const socketIo = io(socketServerURL);
  socketState.set(socketIo);
};

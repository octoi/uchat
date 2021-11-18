import { Server as SocketServer, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { log } from '../utils/log';
import { Events } from './types';

export const handleSocketIoConnection = (
  io: SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on(Events.Connection, (socket: Socket) => {
    log.info(`client connected ${socket.id}`);
    socket.on(Events.Disconnect, () => {
      log.error(`${socket.id} disconnected`);
    });
  });
};

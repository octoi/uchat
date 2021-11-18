import { Server as SocketServer } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { log } from '../utils/log';
import { Events } from './types';

export const handleSocketIoConnection = (
  io: SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on(Events.Connection, (socket) => {
    log.info(`client connected ${socket.id}`);
  });
};

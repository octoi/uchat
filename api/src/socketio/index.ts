import { Server as SocketServer } from 'socket.io';
import { AppSocket, Events } from './types';
import { log } from '../utils/log';
import { botMessage } from './utils';

export const handleSocketIoConnection = (io: SocketServer) => {
  io.on(Events.Connection, (socket: AppSocket) => {
    log.info(`client connected ${socket.id}`);

    socket.on('joinRoom', (data) => {
      // TODO: save user data to redis db
      console.log(data);
      socket.join(data.roomId);
      socket.broadcast.emit(
        'message',
        botMessage(`${data.sender.name} has joined the gang`)
      );
      socket.emit(
        'message',
        botMessage(`Welcome ${data.sender.name} to ${data.roomId}`)
      );
    });

    socket.on('message', (data) => {
      socket.broadcast.emit('message', data);
      socket.emit('message', data);
    });

    // handle disconnect
    socket.on('disconnect', () => {
      log.error(`${socket.id} disconnected`);
      // TODO: leave user from room
    });
  });
};

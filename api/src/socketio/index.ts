import { Server as SocketServer } from 'socket.io';
import { AppSocket, Events } from './types';
import { log } from '../utils/log';
import { joinRoom, message, leaveRoom, clearChat, deleteRoom } from './events';

export const handleSocketIoConnection = (io: SocketServer) => {
  io.on(Events.Connection, (socket: AppSocket) => {
    log.info(`client connected ${socket.id}`);

    socket.on('joinRoom', (data) => joinRoom(socket, data));

    socket.on('message', (data) => message(socket, data));

    socket.on('clearChat', (data) => clearChat(io, data));

    socket.on('deleteRoom', () => deleteRoom(socket));

    socket.on('disconnect', () => leaveRoom(socket));
  });
};

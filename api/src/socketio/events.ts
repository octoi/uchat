import { Server as SocketServer } from 'socket.io';
import { leaveRoomController } from '../controllers/room.controller';
import { log } from '../utils/log';
import { AppSocket, ClearChat, JoinRoom, Message } from './types';
import { botMessage } from './utils';
import {
  getAndDeleteDataController,
  saveUserDataController,
} from '../controllers/redis.controller';

export const joinRoom = (socket: AppSocket, data: JoinRoom) => {
  saveUserDataController(socket.id, data.roomId, data.sender.userId);

  socket.join(data.roomId);

  socket.broadcast.emit(
    'message',
    botMessage(`${data.sender.name} has joined the gang`)
  );
  socket.emit(
    'message',
    botMessage(`Welcome ${data.sender.name} to ${data.roomId}`)
  );
};

export const message = (socket: AppSocket, data: Message) => {
  socket.broadcast.emit('message', data);
  socket.emit('message', data);
};

export const leaveRoom = (socket: AppSocket) => {
  log.error(`${socket.id} disconnected`);
  getAndDeleteDataController(socket.id).then(({ roomId, userId }) => {
    leaveRoomController(roomId, userId);
  });
};

export const clearChat = (io: SocketServer, data: ClearChat) => {
  io.to(data.roomId).emit('clearChat');
};

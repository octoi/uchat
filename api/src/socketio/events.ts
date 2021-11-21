import { log } from '../utils/log';
import { AppSocket, JoinRoom, Message } from './types';
import { botMessage } from './utils';

export const joinRoom = (socket: AppSocket, data: JoinRoom) => {
  // TODO: save user data to redis db
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
  // TODO: leave user from room
};

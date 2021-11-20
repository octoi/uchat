import { Socket } from 'socket.io';

export type AppSocket = Socket<ClientToServerEvents, ServerToClientEvents>;

export enum Events {
  Connection = 'connection',
  Disconnect = 'disconnect',
}

// event list

interface MessageSender {
  name: string;
  profile?: string;
  email?: string;
  isBot?: boolean;
}

export interface Message {
  sender: MessageSender;
  message: any;
}

interface JoinRoom {
  sender: MessageSender;
  roomId: string;
}

export interface ServerToClientEvents {
  message: (message: Message) => void;
}

export interface ClientToServerEvents {
  message: (message: Message) => void;
  joinRoom: (data: JoinRoom) => void;
}

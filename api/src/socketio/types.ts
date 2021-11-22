import { Socket } from 'socket.io';

export type AppSocket = Socket<ClientToServerEvents, ServerToClientEvents>;

export enum Events {
  Connection = 'connection',
  Disconnect = 'disconnect',
}

// event list

export interface ServerToClientEvents {
  message: (message: Message) => void;
  clearChat: () => void;
  leaveRoom: (message: string) => void;
}

export interface ClientToServerEvents {
  message: (message: Message) => void;
  joinRoom: (data: JoinRoom) => void;
  clearChat: (data: ClearChat) => void;
  deleteRoom: () => void;
}

// types
export interface MessageSender {
  name: string;
  profile?: string;
  email?: string;
  isBot?: boolean;
}

export interface Message {
  sender: MessageSender;
  message: any;
}

export interface JoinRoom {
  sender: {
    name: string;
    userId: number;
  };
  roomId: string;
}

export interface ClearChat {
  roomId: string;
}

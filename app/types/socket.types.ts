import { Socket } from 'socket.io-client';

export type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

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
  sender: {
    name: string;
    userId: number;
  };
  roomId: string;
}

interface ClearChat {
  roomId: string;
}

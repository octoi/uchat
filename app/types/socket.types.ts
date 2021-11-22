import { Socket } from 'socket.io-client';

export type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

interface ServerToClientEvents {
  message: (message: Message) => void;
}

interface ClientToServerEvents {
  message: (message: Message) => void;
  joinRoom: (data: JoinRoom) => void;
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

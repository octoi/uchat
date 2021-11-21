import { Socket } from 'socket.io-client';
import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';

interface Props {
  roomId: string;
  onOpen: () => void;
  socket: Socket | null;
}

export default function ChatSection({ roomId, onOpen, socket }: Props) {
  return (
    <div className='h-full'>
      <ChatHeader roomId={roomId} onOpen={onOpen} />
      <ChatContainer roomId={roomId} socket={socket} />
    </div>
  );
}

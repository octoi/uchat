import { Socket } from 'socket.io-client';
import Chats from './Chats';
import MessageBox from './MessageBox';

interface Props {
  roomId: string;
  socket: Socket | null;
}

export default function ChatContainer({ roomId, socket }: Props) {
  return (
    <div className='chat-section-chat-container relative'>
      <Chats socket={socket} />
      <MessageBox roomId={roomId} />
    </div>
  );
}

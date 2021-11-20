import Chats from './Chats';
import MessageBox from './MessageBox';

export default function ChatContainer({ roomId }: { roomId: string }) {
  return (
    <div className='chat-section-chat-container relative'>
      <Chats />
      <MessageBox roomId={roomId} />
    </div>
  );
}

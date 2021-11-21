import Chats from './Chats';
import MessageBox from './MessageBox';

interface Props {
  roomId: string;
}

export default function ChatContainer({ roomId }: Props) {
  return (
    <div className='chat-section-chat-container relative'>
      <Chats />
      <MessageBox roomId={roomId} />
    </div>
  );
}

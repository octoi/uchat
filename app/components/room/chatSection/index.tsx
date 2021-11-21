import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';

interface Props {
  roomId: string;
  onOpen: () => void;
}

export default function ChatSection({ roomId, onOpen }: Props) {
  return (
    <div className='h-full'>
      <ChatHeader roomId={roomId} onOpen={onOpen} />
      <ChatContainer roomId={roomId} />
    </div>
  );
}

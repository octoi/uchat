import MessageBox from './MessageBox';

export default function ChatContainer({ roomId }: { roomId: string }) {
  return (
    <div className='chat-section-chat-container relative'>
      <div className='h-full overflow-y-scroll'></div>
      <MessageBox roomId={roomId} />
    </div>
  );
}

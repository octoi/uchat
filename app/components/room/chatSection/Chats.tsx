import { socketState } from '@/state/socket.state';
import { Message } from '@/types/socketio.types';
import { useState, useEffect } from 'react';

export default function Chats() {
  const [messages, setMessages] = useState<Message[]>([]);

  const socket = socketState.get();

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
  }, []);

  return (
    <div className='h-full overflow-y-scroll'>
      {messages.map((message, idx) => (
        <p key={idx}>{message.message}</p>
      ))}
    </div>
  );
}

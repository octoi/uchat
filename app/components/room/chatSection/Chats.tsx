import { Message } from '@/types/socketio.types';
import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';

export default function Chats({ socket }: { socket: Socket | null }) {
  const [messages, setMessages] = useState<Message[]>([]);

  // const socket = socketState.get();

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

  return (
    <div className='h-full overflow-y-scroll'>
      {messages.map((message, idx) => (
        <p key={idx}>{message.message}</p>
      ))}
    </div>
  );
}

import { Message } from '@/types/socketio.types';
import { useState, useEffect } from 'react';
import { socketStore } from '@/state/socket.state';
import { Downgraded } from '@hookstate/core';

export default function Chats() {
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = socketStore.attach(Downgraded).get();

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  return (
    <div className='h-full overflow-y-scroll'>
      {messages.map((message, idx) => (
        <p key={idx}>{message.message}</p>
      ))}
    </div>
  );
}

import { Message } from '@/types/socketio.types';
import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { Downgraded, useState as useHookState } from '@hookstate/core';
import { socketStore } from '@/state/socket.state';

export default function Chats({}: { socket: Socket | null }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const socketState = useHookState(socketStore);

  // useEffect(() => {
  //   if (!socket) return;
  //   console.log('hello world');

  //   socket.on('message', (message) => {
  //     setMessages([...messages, message]);
  //   });
  // }, [messages]);
  const socket = socketState.attach(Downgraded).get();

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

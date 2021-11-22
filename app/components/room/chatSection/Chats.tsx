/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { Message } from '@/types/socket.types';
import { socketStore } from '@/state/socket.state';
import { Downgraded } from '@hookstate/core';
import { messageStore, clearMessages } from '@/state/message.state';
import { useState } from '@hookstate/core';

export default function Chats() {
  const socket = socketStore.attach(Downgraded).get();
  const messages = useState(messageStore);

  const allMessages = messages.attach(Downgraded).get();

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (message) => {
      messages.attach(Downgraded).set([...allMessages, message]);
    });

    socket.on('clearChat', clearMessages);
  }, [socket, allMessages, messages]);

  return (
    <div className='h-full overflow-y-scroll'>
      {messages.get().map((message, idx) => (
        <ChatMessage key={idx} message={message} />
      ))}
      <div className='h-20' />
    </div>
  );
}

function ChatMessage({ message }: { message: Message }) {
  return (
    <div className='flex w-full p-3 align-top'>
      <img
        src={message.sender.profile}
        alt={message.sender.name}
        className='rounded-full w-10 h-10 object-cover'
      />
      <div className='ml-2 bg-app-dark p-3 rounded-md'>
        <p className='text-app-white mb-1'>{message.sender.name}</p>
        <p className='text-app-grey'>{message.message}</p>
      </div>
    </div>
  );
}

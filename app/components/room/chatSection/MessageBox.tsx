import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineSend } from 'react-icons/ai';
import { Downgraded, useState } from '@hookstate/core';
import { socketStore } from '@/state/socket.state';
import { userStore } from '@/state/user.state';

export default function MessageBox({ roomId }: { roomId: string }) {
  const messageState = useState('');
  const socket = socketStore.attach(Downgraded).get();
  const user = userStore.get();

  const send = (message: string) => {
    if (!socket || !user) return;
    socket.emit('message', {
      message,
      sender: {
        name: user.name,
        profile: user.profile,
        email: user.email,
      },
    });
  };

  const sendMessage = (message: string) => {
    if (!message.trim()) return;
    send(message);
  };

  return (
    <div className='absolute bottom-0 w-full bg-app-dark p-4 rounded flex items-center'>
      <div className='hover:opacity-70 cursor-pointer transition duration-300'>
        <IoMdAddCircleOutline size={30} />
      </div>
      <textarea
        placeholder={`Message ${roomId}`}
        className='border-none outline-none bg-app-dark ml-2 text-app-grey w-full h-7 text-lg resize-none'
        value={messageState.get()}
        onChange={(e) => messageState.set(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            let message = messageState.get();
            messageState.set('');
            sendMessage(message);
          }
        }}
      />
      <div
        className='hover:opacity-70 cursor-pointer transition duration-300'
        onClick={() => sendMessage(messageState.get())}
      >
        <AiOutlineSend size={28} />
      </div>
    </div>
  );
}

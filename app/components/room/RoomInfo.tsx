/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { Image, useDisclosure, useToast } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import HeaderModal from '../shared/header/HeaderModal';
import CopyToClipboard from 'react-copy-to-clipboard';
import RoomSettings from './RoomSettings';
import JoinedUsers from './JoinedUsers';

export default function RoomInfo({ roomData }: { roomData: RoomData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const loggedInUserData = useState(userStore);
  const isHost = roomData.creator?.email === loggedInUserData.get()?.email;

  return (
    <div>
      <div className='relative h-40 w-full'>
        <img
          src={roomData.picture}
          alt={roomData.title}
          className='h-40 w-full object-cover'
        />
        <RoomSettings roomId={roomData.roomId} isHost={isHost} />
      </div>
      <div className='p-5 rounded flex items-center justify-between'>
        <h1 className='font-medium text-xl text-app-white'>
          {roomData.title.slice(0, 23) +
            (roomData.title.length > 24 ? ' ...' : '')}
        </h1>
        <AiOutlineInfoCircle
          strokeWidth={20}
          size={20}
          className='cursor-pointer transition duration-500 hover:opacity-80'
          onClick={onOpen}
        />
      </div>
      <HeaderModal
        close={onClose}
        isOpen={isOpen}
        title='Room Info'
        size='xl'
        scrollBehavior='inside'
      >
        <Image
          src={roomData.picture}
          alt={roomData.title}
          width='100%'
          height={200}
          objectFit='cover'
        />
        <h2 className='font-medium text-xl text-app-white mt-5'>
          {roomData.title}
        </h2>
        <p className='text-app-grey mt-3'>{roomData.description}</p>

        <div className='mt-5 flex items-center justify-between bg-app-dark rounded-md'>
          <p className='p-3 text-lg text-app-grey'>{roomData.roomId}</p>
          <CopyToClipboard
            text={roomData.roomId}
            onCopy={() => {
              toast({
                title: 'Copied To Clipboard',
                description: `${roomData.roomId} is in your clipboard now`,
                duration: 3000,
                isClosable: true,
                position: 'top-right',
                status: 'success',
              });
            }}
          >
            <button className='p-3 rounded-md transition duration-500 text-app-grey hover:text-app-purpleLight'>
              <MdContentCopy size={20} />
            </button>
          </CopyToClipboard>
        </div>
        <button
          className='flex items-center justify-center text-lg mt-2 p-3 rounded-md transition duration-500 bg-app-dark w-full hover:bg-app-purpleLight'
          onClick={() => {
            navigator.share({
              title: `Join the room ${roomData.title}`,
              url: window.location.href,
            });
          }}
        >
          <BiShareAlt className='mr-2' />
          Share Room Link
        </button>
      </HeaderModal>
      <div className='px-5 pb-5 mt-2'>
        <JoinedUsers roomId={roomData.roomId} creator={roomData.creator} />
      </div>
    </div>
  );
}

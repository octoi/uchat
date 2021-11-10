/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { Flex } from '@chakra-ui/react';

export default function RoomPageContent({ roomData }: { roomData: RoomData }) {
  return (
    <Flex direction='row' p={2}>
      <div className='w-full bg-app-darker mr-2 p-5 rounded'>chat section</div>
      <div className='hidden xl:block bg-app-dark rounded w-1/4'>
        <div className='relative'>
          <img
            src={roomData.picture}
            alt={roomData.title}
            className='h-40 w-full object-cover'
          />
          <div className='absolute bottom-3 left-3'>
            <h1 className='font-medium text-xl'>{roomData.title}</h1>
            <p className='font-medium text-xl'>
              {roomData?._count?.joinedUsers} Users
            </p>
          </div>
        </div>
      </div>
    </Flex>
  );
}

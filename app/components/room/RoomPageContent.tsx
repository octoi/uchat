/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { Flex } from '@chakra-ui/react';
import RoomInfo from './RoomInfo';

export default function RoomPageContent({ roomData }: { roomData: RoomData }) {
  return (
    <Flex direction='row' p={2}>
      <div className='w-full bg-app-darker mr-2 p-5 rounded'>chat section</div>
      <div className='hidden xl:block bg-app-dark rounded w-1/4'>
        <RoomInfo roomData={roomData} />
      </div>
    </Flex>
  );
}

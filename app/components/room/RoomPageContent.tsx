/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { Flex, useDisclosure } from '@chakra-ui/react';
import HeaderModal from '../shared/header/HeaderModal';
import ChatSection from './chatSection';
import RoomInfo from './RoomInfo';

export default function RoomPageContent({ roomData }: { roomData: RoomData }) {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <Flex direction='row' p={2}>
      <div className='chat-section w-full bg-app-darker p-5 rounded'>
        <ChatSection roomId={roomData.roomId} onOpen={onOpen} />
      </div>

      <div className='hidden ml-2 xl:block bg-app-dark rounded w-1/4 h-full'>
        <RoomInfo roomData={roomData} />
      </div>

      <HeaderModal title='Options' close={onClose} isOpen={isOpen}>
        <div className='xl:block bg-app-dark rounded w-full h-full'>
          <RoomInfo roomData={roomData} />
        </div>
      </HeaderModal>
    </Flex>
  );
}

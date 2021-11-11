import { IoMdSettings } from 'react-icons/io';
import { Button, Divider, useDisclosure } from '@chakra-ui/react';
import { RoomData } from '@/types/room.types';
import HeaderModal from '../shared/header/HeaderModal';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineClear } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

export default function RoomSettings({
  roomData,
  isHost,
}: {
  roomData: RoomData;
  isHost: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className='relative bottom-8 right-2 w-full flex flex-row-reverse'>
        <button
          onClick={onOpen}
          className='text-2xl text-app-grey transition duration-500 hover:opacity-70'
        >
          <IoMdSettings />
        </button>
      </div>

      <HeaderModal
        title='Edit Room'
        close={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
      >
        <Button
          size='lg'
          width='100%'
          background='var(--dark)'
          py={7}
          _hover={{ background: 'var(--purple-light)' }}
          display='flex'
          flexDirection='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <AiOutlineClear className='mr-2' size='21' />
          Clear Chat
        </Button>
        <Button
          size='lg'
          width='100%'
          background='var(--dark)'
          py={7}
          mt={2}
          _hover={{ background: 'var(--purple-light)' }}
          display='flex'
          flexDirection='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <BiLogOut className='mr-2' size='21' />
          Leave Room
        </Button>
        {isHost && (
          <>
            <Divider my={5} />
            <Button
              size='lg'
              width='100%'
              background='var(--dark)'
              py={7}
              _hover={{ background: 'var(--purple-light)' }}
              display='flex'
              flexDirection='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              <AiOutlineClear className='mr-2' size='21' />
              Clear For All
            </Button>
            <Button
              size='lg'
              width='100%'
              background='var(--dark)'
              py={7}
              mt={2}
              _hover={{ background: 'var(--purple-light)' }}
              display='flex'
              flexDirection='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              <HiOutlineTrash className='mr-2' size='21' />
              Delete Room
            </Button>
          </>
        )}
      </HeaderModal>
    </div>
  );
}

import { useRouter } from 'next/router';
import { IoMdSettings } from 'react-icons/io';
import { Button, Divider, useDisclosure, useToast } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineClear } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { useMutation } from '@apollo/client';
import { DELETE_ROOM, LEAVE_ROOM } from '@/graphql/room/room.mutation';
import { Paths } from '@/utils/constants';
import HeaderModal from '../shared/header/HeaderModal';

export default function RoomSettings({
  roomId,
  isHost,
}: {
  roomId: string;
  isHost: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();

  const [leaveRoom] = useMutation(LEAVE_ROOM);
  const [deleteRoom] = useMutation(DELETE_ROOM);

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
        title='Settings'
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
          onClick={() => {
            leaveRoom({ variables: { roomId } })
              .then(() => {
                router.push(Paths.app);
              })
              .catch((err) => {
                console.log(err);
                toast({
                  title: 'Failed to leave room',
                  status: 'error',
                  position: 'top-right',
                  duration: 3000,
                  isClosable: true,
                });
              });
          }}
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
              onClick={() => {
                deleteRoom({ variables: { roomId } })
                  .then(() => {
                    router.push(Paths.app);
                  })
                  .catch((err) => {
                    console.log(err);
                    toast({
                      title: 'Failed to delete room',
                      status: 'error',
                      position: 'top-right',
                      duration: 3000,
                      isClosable: true,
                    });
                  });
              }}
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

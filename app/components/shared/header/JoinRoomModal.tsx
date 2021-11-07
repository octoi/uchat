import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import Input from '@/components/account/Input';
import HeaderModal from './HeaderModal';
import { redirectToRoom } from '@/utils/constants';

interface Props {
  onClose: any;
  isOpen: any;
}

export default function JoinRoomModal({ onClose, isOpen }: Props) {
  const roomIdState = useState('');
  const router = useRouter();

  const goToRoom = () => {
    router.push(redirectToRoom(roomIdState.get().trim()));
  };

  return (
    <HeaderModal title='Join Room' close={onClose} isOpen={isOpen}>
      <Input
        placeholder='Enter Room ID'
        state={roomIdState.get().trim()}
        setState={roomIdState.set}
        mt={1}
      />
      <Button
        size='lg'
        mt={3}
        py={7}
        width='100%'
        disabled={roomIdState.get().trim().length === 0}
        background='var(--purple-light)'
        _hover={{ background: 'var(--purple)' }}
        onClick={goToRoom}
      >
        Join Room
      </Button>
    </HeaderModal>
  );
}

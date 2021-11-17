import { Divider } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface Props {
  roomId: string;
  onOpen: () => void;
}

export default function ChatHeader({ roomId, onOpen }: Props) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-medium'>{roomId}</h2>
        <AiOutlineInfoCircle
          strokeWidth={20}
          size={20}
          className='cursor-pointer transition duration-500 hover:opacity-80'
          onClick={onOpen}
        />
      </div>
      <Divider mt={3} />
    </div>
  );
}

import Link from 'next/link';
import HeaderModal from './HeaderModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { Paths } from '@/utils/constants';

export default function NonAuthButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button
        onClick={onOpen}
        className='ml-3 md:ml-5 py-2 px-2 text-app-grey rounded font-medium transition duration-500 text-2xl bg-app-dark hover:bg-app-darkest'
      >
        <MdOutlinePersonOutline />
      </button>
      <HeaderModal title='Options' close={onClose} isOpen={isOpen}>
        <Link href={Paths.login} passHref>
          <Button
            size='lg'
            width='100%'
            background='var(--dark)'
            py={7}
            _hover={{ background: 'var(--purple-light)' }}
          >
            Log In
          </Button>
        </Link>
        <Link href={Paths.register} passHref>
          <Button
            size='lg'
            mt={2}
            width='100%'
            background='var(--dark)'
            py={7}
            _hover={{ background: 'var(--purple-light)' }}
          >
            Sign Up
          </Button>
        </Link>
        <Link href={Paths.terms} passHref>
          <Button
            size='lg'
            mt={2}
            width='100%'
            background='var(--dark)'
            py={7}
            _hover={{ background: 'var(--purple-light)' }}
          >
            Terms & Policy
          </Button>
        </Link>
      </HeaderModal>
    </div>
  );
}

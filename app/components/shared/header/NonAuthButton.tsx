import Link from 'next/link';
import HeaderModal from './HeaderModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { Paths } from '@/utils/constants';
import { BiLogIn } from 'react-icons/bi';
import { RiQuillPenLine } from 'react-icons/ri';
import { VscLaw } from 'react-icons/vsc';

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
            mt={2}
            _hover={{ background: 'var(--purple-light)' }}
            display='flex'
            flexDirection='row'
            justifyContent='flex-start'
            alignItems='center'
          >
            <BiLogIn className='mr-2' size='21' />
            Log In
          </Button>
        </Link>
        <Link href={Paths.register} passHref>
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
            <RiQuillPenLine className='mr-2' size='21' />
            Sign Up
          </Button>
        </Link>
        <Link href={Paths.terms} passHref>
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
            <VscLaw className='mr-2' size='21' />
            Terms & Policy
          </Button>
        </Link>
      </HeaderModal>
    </div>
  );
}

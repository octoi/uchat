import Link from 'next/link';
import HeaderModal from './HeaderModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { Paths } from '@/utils/constants';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';

export default function LoggedAuthButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userState = useState(userStore);
  const userData = userState.get();

  return (
    <div>
      <div>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={userData?.profile}
          alt={userData?.name}
          className='ml-3 md:ml-5 rounded transition duration-500'
        />
      </div>
      <HeaderModal title='Options' close={onClose} isOpen={isOpen}>
        <Link href={Paths.login} passHref>
          <Button
            size='lg'
            width='100%'
            background='var(--dark)'
            py={7}
            _hover={{ background: 'var(--purple)' }}
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
            _hover={{ background: 'var(--purple)' }}
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
            _hover={{ background: 'var(--purple)' }}
          >
            Terms & Policy
          </Button>
        </Link>
      </HeaderModal>
    </div>
  );
}

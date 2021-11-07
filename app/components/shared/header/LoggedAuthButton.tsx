/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import HeaderModal from './HeaderModal';
import { Button, useDisclosure, Flex, Divider } from '@chakra-ui/react';
import { Paths } from '@/utils/constants';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import { IoMdSettings, IoMdAdd } from 'react-icons/io';
import { ImEnter } from 'react-icons/im';
import { FiCompass } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import { logoutUser } from '@/utils/user.utils';

export default function LoggedAuthButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userState = useState(userStore);
  const userData = userState.get();

  return (
    <div>
      <div
        onClick={onOpen}
        className='ml-3 w-9 h-9 md:ml-5 rounded object-contain cursor-pointer transition duration-500 hover:opacity-70'
      >
        <img
          src={userData?.profile}
          alt={userData?.name}
          className='object-cover rounded w-full h-full'
        />
      </div>
      <HeaderModal close={onClose} isOpen={isOpen} title='Options'>
        <Flex
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          mb={10}
          mt={5}
        >
          <Flex direction='row' alignItems='center'>
            <img
              src={userData?.profile}
              alt={userData?.name}
              className='w-16 h-16 rounded-full object-cover'
            />
            <Flex ml={3} direction='column'>
              <h2 className='text-xl font-medium text-app-white'>
                {userData?.name}
              </h2>
              <h3 className='text-lg text-app-grey'>{userData?.email}</h3>
            </Flex>
          </Flex>
          <Link href={Paths.settings} passHref>
            <button className='text-2xl text-app-grey transition duration-500 hover:opacity-70'>
              <IoMdSettings />
            </button>
          </Link>
        </Flex>
        <Link href={Paths.newRoom} passHref>
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
            <IoMdAdd className='mr-2' size='22' strokeWidth={20} />
            New Room
          </Button>
        </Link>
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
          <ImEnter className='mr-3' />
          Join Room
        </Button>
        <Link href={Paths.explore} passHref>
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
            <FiCompass className='mr-2' size='21' />
            Explore
          </Button>
        </Link>
        <Link href={Paths.settings} passHref>
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
            <IoMdSettings className='mr-2' size='21' />
            Settings
          </Button>
        </Link>
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
          onClick={logoutUser}
        >
          <BiLogOut className='mr-2' size='21' />
          Logout
        </Button>
      </HeaderModal>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import HeaderModal from './HeaderModal';
import { Button, useDisclosure, Flex } from '@chakra-ui/react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { Paths } from '@/utils/constants';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import { IoMdSettings } from 'react-icons/io';

export default function LoggedAuthButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userState = useState(userStore);
  const userData = userState.get();

  return (
    <div>
      <div
        onClick={onOpen}
        className='ml-3 w-10 md:ml-5 rounded-full object-contain cursor-pointer transition duration-500 hover:opacity-70'
      >
        <img
          src={userData?.profile}
          alt={userData?.name}
          className='object-contain rounded-full'
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
          <button className='text-2xl text-app-grey transition duration-500 hover:opacity-70'>
            <IoMdSettings />
          </button>
        </Flex>
        <Link href={Paths.newRoom} passHref>
          <Button
            size='lg'
            width='100%'
            background='var(--dark)'
            py={7}
            _hover={{ background: 'var(--purple-light)' }}
          >
            New Room
          </Button>
        </Link>
      </HeaderModal>
    </div>
  );
}

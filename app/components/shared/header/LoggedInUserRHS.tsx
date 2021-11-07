import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import LoggedAuthButton from './LoggedAuthButton';
import { Paths } from '@/utils/constants';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import JoinRoomModal from './JoinRoomModal';

export default function LoggedInUserRHS() {
  const userState = useState(userStore);
  const userData = userState.get();
  const [showComponent, setShowComponent] = React.useState(false);

  const { onOpen, onClose, isOpen } = useDisclosure();

  React.useEffect(() => {
    setShowComponent(userData !== null);
  }, [userData]);

  if (!showComponent) return null;
  return (
    <Flex direction='row' alignItems='center'>
      <Link href={Paths.newRoom} passHref>
        <button className={`${styles.button} bg-app-dark hover:bg-app-darkest`}>
          New Room
        </button>
      </Link>
      <button
        className={`${styles.button} ml-3 md:ml-5 bg-app-dark hover:bg-app-darkest`}
        onClick={onOpen}
      >
        Join Room
      </button>
      <LoggedAuthButton openJoinRoomModal={onOpen} />
      <JoinRoomModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

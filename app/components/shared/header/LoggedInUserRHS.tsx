import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import LoggedAuthButton from './LoggedAuthButton';
import { Paths } from '@/utils/constants';
import { Flex } from '@chakra-ui/react';
import { GrFormAdd } from 'react-icons/gr';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';

export default function LoggedInUserRHS() {
  const userState = useState(userStore);
  const userData = userState.get();
  const [showComponent, setShowComponent] = React.useState(false);

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
      <Link href={Paths.newRoom} passHref>
        <button
          className={`${styles.button} ml-3 md:ml-5 bg-app-dark hover:bg-app-darkest`}
        >
          Join Room
        </button>
      </Link>
      <LoggedAuthButton />
    </Flex>
  );
}

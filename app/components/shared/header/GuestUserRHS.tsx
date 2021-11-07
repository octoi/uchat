import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import NonAuthButton from './NonAuthButton';
import { Paths } from '@/utils/constants';
import { Flex } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';

export default function GuestUserRHS() {
  const userState = useState(userStore);
  const userData = userState.get();
  const [showComponent, setShowComponent] = React.useState(false);

  React.useEffect(() => {
    setShowComponent(typeof userData === null);
  }, [userData]);

  if (!showComponent) return null;

  return (
    <Flex direction='row' alignItems='center'>
      <Link href={Paths.login} passHref>
        <button className={`${styles.button} bg-app-dark hover:bg-app-darkest`}>
          Log In
        </button>
      </Link>
      <Link href={Paths.register} passHref>
        <button
          className={`${styles.button} ml-3 md:ml-5 bg-app-purple hover:bg-app-purpleDark`}
        >
          Sign Up
        </button>
      </Link>
      <NonAuthButton />
    </Flex>
  );
}

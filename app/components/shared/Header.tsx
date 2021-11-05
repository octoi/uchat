import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { userStore } from '@/state/user.state';
import { Flex } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { Paths } from '@/utils/constants';

export default function Header() {
  const userState = useState(userStore);
  const userData = userState.get();

  return (
    <nav>
      <Flex
        direction='row'
        justifyContent='space-between'
        p={5}
        mb={3}
        background='var(--darker)'
        className='shadow-sm'
        alignItems='center'
      >
        <Flex direction='row' alignItems='center'>
          <Link href={Paths.app} passHref>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src='/logo.svg' alt='Uchat' className='w-10' />
          </Link>
          <Link href={Paths.explore} passHref>
            <p className={styles.link}>Explore</p>
          </Link>
          <Link href={Paths.explore} passHref>
            <p className={styles.link}>Terms And Policy</p>
          </Link>
        </Flex>
        <Flex direction='row' alignItems='center'>
          <Link href={Paths.login} passHref>
            <button
              className={`${styles.button} bg-app-dark hover:bg-app-darkest`}
            >
              Log In
            </button>
          </Link>
          <Link href={Paths.register} passHref>
            <button
              className={`${styles.button} ml-5 bg-app-purple hover:bg-app-purpleDark`}
            >
              Sign Up
            </button>
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
}

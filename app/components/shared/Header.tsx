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
          <button className='py-2 px-4 bg-app-dark text-app-grey rounded font-medium transition duration-500 hover:bg-app-darkest'>
            Log In
          </button>
        </Link>
        <Link href={Paths.register} passHref>
          <button className='ml-5 py-2 px-4 bg-app-purple text-app-grey rounded font-medium transition duration-500 hover:bg-app-purpleDark'>
            Sign Up
          </button>
        </Link>
      </Flex>
    </Flex>
  );
}

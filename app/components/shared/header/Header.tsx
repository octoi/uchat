import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { userStore } from '@/state/user.state';
import { Flex } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { Paths } from '@/utils/constants';
import GuestUserRHS from './GuestUserRHS';
import LoggedInUserRHS from './LoggedInUserRHS';

export default function Header() {
  const userState = useState(userStore);
  const userData = userState.get();

  return (
    <nav className='fixed top-0 w-full'>
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
          <Link href={Paths.terms} passHref>
            <p className={styles.link}>Terms And Policy</p>
          </Link>
        </Flex>
        <LoggedInUserRHS />
        <GuestUserRHS />
      </Flex>
    </nav>
  );
}

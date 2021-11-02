import Link from 'next/link';
import { userStore } from '@/state/user.state';
import { Flex, Link as ChakraLink } from '@chakra-ui/react';
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
      background='#1c2331'
      className='shadow-sm'
      alignItems='center'
    >
      <h2 className='font-bold text-xl'>Uchat</h2>
      <div className='flex flex-row'>
        {!userData && (
          <div>
            <Link href={Paths.login} passHref>
              <a className='mr-4 hover:underline'>Login</a>
            </Link>
            <Link href={Paths.register} passHref>
              <a className='hover:underline'>Register</a>
            </Link>
          </div>
        )}
      </div>
    </Flex>
  );
}

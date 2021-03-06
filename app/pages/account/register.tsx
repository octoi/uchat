import { FormEvent } from 'react';
import { useState } from '@hookstate/core';
import { useMutation } from '@apollo/client';
import { getUserAvatar } from '@/utils/avatars';
import { REGISTER_USER } from '@/graphql/account/account.mutation';
import { Flex, useToast } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';
import { Paths } from '@/utils/constants';
import { useRouter } from 'next/router';
import { setUser } from '@/utils/user.utils';
import Link from 'next/link';
import Layout from '@/components/core/Layout';
import Input from '@/components/account/Input';

export default function RegisterPage() {
  const toast = useToast();
  const router = useRouter();

  const nameState = useState('');
  const emailState = useState('');
  const passwordState = useState('');
  const loadingState = useState(false);

  const [registerUser] = useMutation(REGISTER_USER);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadingState.set(true);

    const newUserData = {
      name: nameState.get(),
      email: emailState.get(),
      password: passwordState.get(),
      profile: getUserAvatar(nameState.get()),
    };

    registerUser({ variables: newUserData })
      .then(({ data }) => {
        const responseData = data?.registerUser;
        setUser(responseData);

        router.push(Paths.app);
        toast({
          title: `Welcome ${nameState.get()} to Uchat 😄`,
          status: 'success',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .catch((err) => {
        toast({
          title: 'Failed to register',
          description: err?.message,
          status: 'error',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      });

    nameState.set('');
    emailState.set('');
    passwordState.set('');
    loadingState.set(false);
  };

  return (
    <Layout
      title='Register'
      description='register in Unknown Chat to hangout with friends'
    >
      <div className='h-screen flex justify-center items-center'>
        <Flex direction='column' p={8} className='w-full max-w-xl'>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-3xl font-bold mb-5'>Register</h2>
            <Input
              placeholder='Name'
              state={nameState.get()}
              setState={nameState.set}
              isDisabled={loadingState.get()}
              required
            />
            <Input
              placeholder='Email'
              type='email'
              state={emailState.get()}
              setState={emailState.set}
              isDisabled={loadingState.get()}
              required
            />
            <Input
              placeholder='Password'
              type='password'
              state={passwordState.get()}
              setState={passwordState.set}
              isDisabled={loadingState.get()}
              required
            />
            <button
              type='submit'
              className={`mt-6 w-full bg-app-purpleLight text-app-grey font-medium p-4 rounded-md transition duration-500 ${
                loadingState.get()
                  ? 'bg-app-purple cursor-not-allowed'
                  : 'hover:bg-app-purple'
              }`}
              disabled={loadingState.get()}
            >
              {loadingState.get() ? (
                <BeatLoader size={8} color='white' />
              ) : (
                'Register'
              )}
            </button>
            <Link href={Paths.login} passHref>
              <p className='mt-3 opacity-90 cursor-pointer transition duration-500 hover:underline'>
                Already have an account ? Login
              </p>
            </Link>
          </form>
        </Flex>
      </div>
    </Layout>
  );
}

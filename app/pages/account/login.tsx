import Link from 'next/link';
import Input from '@/components/account/Input';
import Layout from '@/components/core/Layout';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { Paths } from '@/utils/constants';
import { Flex, useToast } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { setUser } from '@/utils/user.utils';
import { BeatLoader } from 'react-spinners';
import { LOGIN_USER } from '@/graphql/account/account.mutation';

export default function LoginPage() {
  const toast = useToast();
  const router = useRouter();

  const emailState = useState('');
  const passwordState = useState('');
  const loadingState = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    loadingState.set(true);

    const formData = {
      email: emailState.get(),
      password: passwordState.get(),
    };

    loginUser({ variables: formData })
      .then(({ data }) => {
        const responseData = data?.loginUser;
        setUser(responseData);

        router.push(Paths.app);
        toast({
          title: `Welcome back ${responseData?.name} to Uchat 😄`,
          status: 'success',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .catch((err) => {
        toast({
          title: 'Failed to login',
          description: err?.message,
          status: 'error',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .finally(() => {
        emailState.set('');
        passwordState.set('');
        loadingState.set(false);
      });
  };

  return (
    <Layout
      title='Login'
      description='Login to Unknown Chat for hanging with friends'
    >
      <div className='h-screen flex justify-center items-center'>
        <Flex direction='column' p={8} className='w-full max-w-xl'>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-3xl font-bold mb-5'>Login</h2>
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
                'Login'
              )}
            </button>
            <Link href={Paths.register} passHref>
              <p className='mt-3 opacity-90 cursor-pointer transition duration-500 hover:underline'>
                Dont have an account ? Register
              </p>
            </Link>
          </form>
        </Flex>
      </div>
    </Layout>
  );
}

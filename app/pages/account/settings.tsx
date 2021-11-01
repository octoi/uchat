import { FormEvent } from 'react';
import { NextPage } from 'next';
import { Flex, Image, useToast } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import { BeatLoader } from 'react-spinners';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '@/graphql/account/account.mutation';
import { setToken } from '@/utils/jwt';
import Layout from '@/components/core/Layout';
import Input from '@/components/account/Input';
import { getUserAvatar } from '@/utils/avatars';

const SettingsPage: NextPage = () => {
  const userState = useState(userStore);
  const toast = useToast();

  const user = userState.get();

  const nameState = useState('');
  const profileState = useState('');
  const passwordState = useState('');
  const loadingState = useState(false);

  const [updateUser] = useMutation(UPDATE_USER);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadingState.set(true);

    if (nameState.get() !== '' && profileState.get() === '') {
      const permission = window.confirm(
        'Seems like you changed you name, wanna change your profile according to name ?'
      );
      if (permission) {
        profileState.set(getUserAvatar(nameState.get()));
      }
    }

    const formData = {
      email: user?.email,
      name: nameState.get() || user?.name,
      profile: profileState.get() || user?.profile,
      isNewPassword: passwordState.get().length > 0,
      password: passwordState.get(),
    };

    updateUser({ variables: formData })
      .then(({ data }) => {
        const responseData = data?.updateUser;
        setToken(responseData?.token);

        userState.set(responseData);

        toast({
          title: 'Updated Profile 🦋',
          status: 'success',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .catch((err) => {
        toast({
          title: 'Failed to update profile',
          description: err?.message,
          status: 'error',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .finally(() => {
        nameState.set('');
        profileState.set('');
        passwordState.set('');
        loadingState.set(false);
      });
  };

  return (
    <Layout title='Settings' description='Edit your profile'>
      <div className='h-screen flex justify-center items-center'>
        <Flex direction='column' p={8} className='w-full max-w-xl'>
          {user && (
            <form onSubmit={handleFormSubmit}>
              <h2 className='text-3xl font-bold mb-5'>Settings</h2>
              <Image
                src={profileState.get() || user?.profile}
                alt={user?.name}
                width='100%'
                height={200}
                fit='cover'
              />
              <Input
                placeholder={user?.name}
                state={nameState.get()}
                setState={nameState.set}
                isDisabled={loadingState.get()}
              />
              <Input
                placeholder={user?.profile}
                state={profileState.get()}
                setState={profileState.set}
                isDisabled={loadingState.get()}
              />
              <Input
                placeholder='New Password'
                state={passwordState.get()}
                setState={passwordState.set}
                type='password'
                isDisabled={loadingState.get()}
              />
              <button
                type='submit'
                className={`mt-6 w-full bg-green-400 text-gray-900 font-medium p-4 rounded-md transition duration-500 ${
                  loadingState.get()
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'hover:bg-green-600'
                }`}
                disabled={loadingState.get()}
              >
                {loadingState.get() ? (
                  <BeatLoader size={8} color='white' />
                ) : (
                  'Save'
                )}
              </button>
            </form>
          )}
        </Flex>
      </div>
    </Layout>
  );
};

export default SettingsPage;

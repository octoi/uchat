import { NextPage } from 'next';
import { useEffect, FormEvent } from 'react';
import { Flex, Image, useToast } from '@chakra-ui/react';
import { useState } from '@hookstate/core';
import { userStore } from '@/state/user.state';
import { BeatLoader } from 'react-spinners';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '@/graphql/account/account.mutation';
import { getUserAvatar } from '@/utils/avatars';
import { setUser, logoutUser } from '@/utils/user.utils';
import { useRouter } from 'next/router';
import { Paths } from '@/utils/constants';
import Layout from '@/components/core/Layout';
import Input from '@/components/account/Input';

const SettingsPage: NextPage = () => {
  const userState = useState(userStore);
  const toast = useToast();
  const router = useRouter();

  const user = userState.get();

  const nameState = useState('');
  const profileState = useState('');
  const passwordState = useState('');

  const loadingState = useState(false);
  const canUpdateState = useState(false);

  const isButtonDisabled = !canUpdateState.get()
    ? !canUpdateState.get()
    : loadingState.get();

  const [updateUser] = useMutation(UPDATE_USER);

  // for useEffect
  const nameStateValue = nameState.get();
  const profileStateValue = profileState.get();
  const passwordStateValue = passwordState.get();

  useEffect(() => {
    if (
      nameStateValue.length > 0 ||
      profileStateValue.length > 0 ||
      passwordStateValue.length > 0
    ) {
      canUpdateState.set(true);
    } else {
      canUpdateState.set(false);
    }
  }, [nameStateValue, profileStateValue, passwordStateValue]);

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
        setUser(data?.updateUser);

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

  const logout = () => {
    const permission = window.confirm('Are you sure ?');
    if (!permission) return;

    logoutUser();
    router.push(Paths.login);
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
                  isButtonDisabled
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'hover:bg-green-600'
                }`}
                disabled={isButtonDisabled}
              >
                {loadingState.get() ? (
                  <BeatLoader size={8} color='white' />
                ) : (
                  'Save'
                )}
              </button>
            </form>
          )}
          <button
            onClick={logout}
            className='mt-4 w-full bg-red-400 text-gray-900 font-medium p-4 rounded-md transition duration-500'
          >
            Logout
          </button>
        </Flex>
      </div>
    </Layout>
  );
};

export default SettingsPage;

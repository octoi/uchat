import { FormEvent } from 'react';
import { NextPage } from 'next';
import { useState } from '@hookstate/core';
import { useMutation } from '@apollo/client';
import { Flex, useToast, Textarea, Select } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';
import { Paths } from '@/utils/constants';
import { useRouter } from 'next/router';
import { CREATE_ROOM } from '@/graphql/app/room.mutation';
import Link from 'next/link';
import Layout from '@/components/core/Layout';
import Input from '@/components/account/Input';
import { getRoomAvatar } from '@/utils/avatars';

const NewRoomPage: NextPage = () => {
  const toast = useToast();
  const router = useRouter();

  const titleState = useState('My Room Title');
  const descriptionState = useState('My Room Description');
  const isPrivateState = useState(false);
  const loadingState = useState(false);

  const [createRoom] = useMutation(CREATE_ROOM);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadingState.set(true);

    const formData = {
      title: titleState.get(),
      description: descriptionState.get(),
      picture: getRoomAvatar(titleState.get()),
      isPrivate: isPrivateState.get(),
    };

    createRoom({ variables: formData })
      .then(({ data }) => {
        const responseData = data?.createRoom;
        console.log(responseData);

        toast({
          title: 'Created room successfully 🥳',
          status: 'success',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .catch((err) => {
        toast({
          title: 'Failed to create room',
          description: err?.message,
          status: 'error',
          position: 'top-right',
          isClosable: true,
          duration: 5000,
        });
      })
      .finally(() => {
        loadingState.set(false);
      });
  };

  return (
    <Layout
      title='Login'
      description='Login to Unknown Chat for hanging with friends'
    >
      <div className='h-screen flex justify-center items-center'>
        <Flex direction='column' p={8} className='w-full max-w-lg'>
          <form onSubmit={handleFormSubmit}>
            <h2 className='text-3xl font-bold mb-5'>Create New Room</h2>
            <Input
              placeholder='Title'
              type='text'
              state={titleState.get()}
              setState={titleState.set}
              isDisabled={loadingState.get()}
              required
            />
            <Textarea
              placeholder='Description'
              value={descriptionState.get()}
              onChange={(e) => descriptionState.set(e.target.value)}
              variant='filled'
              mt={4}
              className='p-7'
              focusBorderColor='teal.400'
              autoComplete='on'
              required
              disabled={loadingState.get()}
            />

            <Select
              variant='filled'
              mt={4}
              focusBorderColor='teal.400'
              required
              onChange={(e) => isPrivateState.set(e.target.value === 'private')}
              value={isPrivateState.get() ? 'private' : 'public'}
              size='lg'
            >
              <option value='public'>Public</option>
              <option value='private'>Private</option>
            </Select>

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
                'Create Room'
              )}
            </button>
            <Link href={Paths.app} passHref>
              <p className='mt-3 opacity-90 cursor-pointer transition duration-500 hover:underline'>
                Cancel & Go Back ?
              </p>
            </Link>
          </form>
        </Flex>
      </div>
    </Layout>
  );
};

export default NewRoomPage;

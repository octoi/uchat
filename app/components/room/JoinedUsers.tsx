/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { GET_ROOM_USERS } from '@/graphql/room/room.query';
import { useDisclosure } from '@chakra-ui/react';
import { useState as useHookState } from '@hookstate/core';
import { RoomUserType } from '@/types/user.types';
import { getApolloClient } from '@/utils/apollo';
import { AiOutlineCrown } from 'react-icons/ai';
import HeaderModal from '../shared/header/HeaderModal';

interface Props {
  roomId: string;
  creator: RoomUserType;
}

export default function JoinedUsers({ roomId, creator }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [joinedUsers, setJoinedUsers] = useState<RoomUserType[]>([]);
  const loadingState = useHookState(false);
  const errorState = useHookState<string | boolean>(false);

  const client = getApolloClient();

  const getJoinedUsers = () => {
    loadingState.set(true);
    errorState.set(false);
    onOpen();

    client
      .query({
        query: GET_ROOM_USERS,
        variables: { roomId },
      })
      .then(({ data }) => {
        const joinedUsers = data?.getRoomData?.joinedUsers;
        setJoinedUsers(joinedUsers);
      })
      .catch((err) => {
        console.log(err);
        errorState.set('Failed to get room members');
      })
      .finally(() => {
        loadingState.set(false);
      });
  };

  return (
    <div>
      <button
        onClick={getJoinedUsers}
        className='w-full p-3 bg-app-darker rounded-md text-app-grey hover:bg-app-purpleLight transition duration-300'
      >
        View Members
      </button>
      <HeaderModal
        title={`Members (${joinedUsers.length})`}
        isOpen={isOpen}
        close={onClose}
        scrollBehavior='inside'
      >
        {loadingState.get() && <p>Fetching room members ...</p>}
        {errorState.get() && <p>{errorState.get()}</p>}
        {joinedUsers.map((member) => (
          <div
            key={member.email}
            className='flex items-center cursor-pointer p-2 rounded hover:bg-app-dark'
          >
            <img
              src={member.profile}
              alt={member.name}
              className='rounded-full w-10 h-10 object-cover'
            />
            <div className='ml-3 flex items-center'>
              <h2>{member.name}</h2>
              {member.email === creator?.email && (
                <AiOutlineCrown className='ml-1' strokeWidth={20} size={20} />
              )}
            </div>
          </div>
        ))}
      </HeaderModal>
    </div>
  );
}

import React, { useEffect } from 'react';
import Layout from '@/components/core/Layout';
import { JOIN_ROOM } from '@/graphql/room/room.mutation';
import { GET_ROOM_DATA } from '@/graphql/room/room.query';
import { GetRoomDataResponse } from '@/types/room.types';
import { getApolloClient } from '@/utils/apollo';
import { Paths } from '@/utils/constants';
import { useMutation } from '@apollo/client';
import { GetServerSideProps } from 'next';

interface Props {
  roomId: string;
  roomData: GetRoomDataResponse;
}

export default function RoomPage({ roomId, roomData }: Props) {
  const [joinRoom] = useMutation(JOIN_ROOM);

  useEffect(() => {
    joinRoom({ variables: { roomId } });
  }, []);

  return (
    <Layout
      title={roomData.title}
      description={roomData.description}
      needMargin
    >
      <h2>{roomId}</h2>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = getApolloClient();
  const roomId = params?.roomId;

  const responseData = await client.query({
    query: GET_ROOM_DATA,
    variables: { roomId },
  });

  const roomData = responseData?.data?.getRoomData;

  if (!roomData) {
    return {
      redirect: {
        destination: Paths.notFound,
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {
      roomId,
      roomData,
    },
  };
};

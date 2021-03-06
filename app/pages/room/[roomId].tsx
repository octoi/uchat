import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { JOIN_ROOM } from '@/graphql/room/room.mutation';
import { GET_ROOM_DATA } from '@/graphql/room/room.query';
import { RoomData } from '@/types/room.types';
import { getApolloClient } from '@/utils/apollo';
import { Paths } from '@/utils/constants';
import { useMutation } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { connectSocketClientToServer } from 'socketio';
import { socketStore } from '@/state/socket.state';
import { Downgraded } from '@hookstate/core';
import { clearMessages } from '@/state/message.state';
import Layout from '@/components/core/Layout';
import RoomPageContent from '@/components/room/RoomPageContent';

interface Props {
  roomId: string;
  roomData: RoomData;
}

export default function RoomPage({ roomId, roomData }: Props) {
  const [joinRoom] = useMutation(JOIN_ROOM);
  const router = useRouter();

  useEffect(() => {
    clearMessages();

    const socket = connectSocketClientToServer(roomId);
    joinRoom({ variables: { roomId } });

    socket?.on('leaveRoom', (msg) => {
      alert(msg);
      router.push(Paths.app);
    });

    return () => {
      socketStore.attach(Downgraded).get()?.disconnect();
    };
  }, [roomId, joinRoom, router]);

  return (
    <Layout
      title={roomData.title}
      description={roomData.description}
      image={roomData.picture}
      needMargin
    >
      <RoomPageContent roomData={roomData} />
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

  const roomData = responseData?.data?.getRoom;

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

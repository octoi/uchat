import React, { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { JOIN_ROOM } from '@/graphql/room/room.mutation';
import { GET_ROOM_DATA } from '@/graphql/room/room.query';
import { RoomData } from '@/types/room.types';
import { getApolloClient } from '@/utils/apollo';
import { Paths } from '@/utils/constants';
import { useMutation } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { connectSocketClientToServer } from 'socketio';
import Layout from '@/components/core/Layout';
import RoomPageContent from '@/components/room/RoomPageContent';

interface Props {
  roomId: string;
  roomData: RoomData;
}

export default function RoomPage({ roomId, roomData }: Props) {
  const [joinRoom] = useMutation(JOIN_ROOM);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    connectSocketClientToServer(roomId, setSocket);
    joinRoom({ variables: { roomId } });
  }, [roomId, joinRoom]);

  return (
    <Layout
      title={roomData.title}
      description={roomData.description}
      needMargin
    >
      <RoomPageContent roomData={roomData} socket={socket} />
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

import { useState, useEffect } from 'react';
import { GET_ROOMS } from '@/graphql/app/app.query';
import { RoomData } from '@/types/room.types';
import { useQuery } from '@apollo/client';
import Rooms from './Rooms';
import SearchBanner from './SearchBanner';

export default function ExploreRooms() {
  const [rooms, setRooms] = useState<RoomData[] | null>(null);
  const { loading, error, data } = useQuery(GET_ROOMS);

  useEffect(() => {
    if (!loading && data?.getRooms) {
      setRooms(data?.getRooms);
    }
  }, [data, loading]);

  return (
    <div className='mt-7'>
      <SearchBanner setRooms={setRooms} />
      <Rooms loading={loading} error={error} rooms={rooms} />
    </div>
  );
}

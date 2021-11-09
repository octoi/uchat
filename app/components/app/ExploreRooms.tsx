import { useState, useEffect } from 'react';
import { GET_ROOMS, SEARCH_ROOM } from '@/graphql/app/app.query';
import { RoomData } from '@/types/room.types';
import { ApolloError, useQuery } from '@apollo/client';
import Rooms from './Rooms';
import SearchBanner from './SearchBanner';
import { getApolloClient } from '@/utils/apollo';

export default function ExploreRooms() {
  const client = getApolloClient();

  const [rooms, setRooms] = useState<RoomData[] | null>(null);
  const [allRooms, setAllRooms] = useState<RoomData[] | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError | undefined>(undefined);

  // const { loading, error, data } = useQuery(GET_ROOMS);

  useEffect(() => {
    getAllRooms();
  }, []);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setRooms(allRooms);
    } else {
      searchForQuery();
    }
  }, [searchQuery]);

  const getAllRooms = async () => {
    const responseData = await client.query({ query: GET_ROOMS });

    setLoading(responseData.loading);
    setError(responseData.error);

    if (responseData?.data?.getRooms) {
      setRooms(responseData?.data?.getRooms);
      setAllRooms(responseData?.data?.getRooms);
    }
  };

  const searchForQuery = async () => {
    const responseData = await client.query({
      query: SEARCH_ROOM,
      variables: { query: searchQuery },
    });

    const rooms = responseData?.data?.searchRoom;
    setRooms(rooms);
  };

  return (
    <div className='mt-7'>
      <SearchBanner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2 className='text-xl font-medium text-app-grey'>
        {searchQuery.length === 0 ? (
          'All Rooms'
        ) : (
          <p>
            Search for{' '}
            <span className='text-app-purpleLight'>"{searchQuery}"</span>
          </p>
        )}
      </h2>
      <Rooms loading={loading} error={error} rooms={rooms} />
    </div>
  );
}

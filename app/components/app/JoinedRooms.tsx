import { GET_JOINED_ROOMS } from '@/graphql/app/app.query';
import { useQuery } from '@apollo/client';

export default function JoinedRooms() {
  const { data, loading, error } = useQuery(GET_JOINED_ROOMS);

  if (data) {
    console.log(data);
  }

  return (
    <div className='mt-7'>
      {loading && <p className='text-app-grey'>Loading ...</p>}
      {error && (
        <div>
          <p className='text-red-400 text-lg'>Failed to fetch data 😟</p>
          <p
            className='text-app-grey text-lg mt-2 cursor-pointer hover:underline'
            onClick={() => window.location.reload()}
          >
            Try reloading
          </p>
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data?.getJoinedRooms &&
          data?.getJoinedRooms.map((room: any) => {
            return <p key={room?.roomId}>{room?.title}</p>;
          })}
      </div>
    </div>
  );
}

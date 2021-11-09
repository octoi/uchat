/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { ApolloError } from '@apollo/client';
import styles from '@/styles/Rooms.module.css';

interface Props {
  loading?: boolean;
  error?: ApolloError;
  rooms?: RoomData[] | null;
}

export default function Rooms({ loading, error, rooms }: Props) {
  return (
    <div>
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
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {rooms &&
          rooms.map((room) => (
            <div key={room.roomId} className='w-full rounded bg-app-darker'>
              <div className='relative h-60'>
                <img
                  src={room.picture}
                  className='w-full rounded-tl rounded-tr h-60 object-cover'
                  alt={room.title}
                />
                <div className={styles.roomPictureContainer}>
                  <img
                    src={room.picture}
                    className='w-20 h-20 object-cover'
                    alt={room.title}
                  />
                </div>
              </div>
              <div className='p-4 mt-5'>
                <h2 className='text-2xl font-medium text-app-white'>
                  {room.title}
                </h2>
                <p className='mt-2 text-lg text-app-grey'>
                  {room.description.slice(0, 250)}
                  {room.description.length > 250 && ' ...'}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

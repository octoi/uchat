/* eslint-disable @next/next/no-img-element */
import { RoomData } from '@/types/room.types';
import { ApolloError } from '@apollo/client';
import Link from 'next/link';
import styles from '@/styles/Rooms.module.css';
import { Paths } from '@/utils/constants';

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
            <Link
              href={Paths.room + '/' + room.roomId}
              passHref
              key={room.roomId}
            >
              <div className='group w-full cursor-pointer rounded-lg bg-app-darker hover:bg-app-dark transition duration-500'>
                <div className='relative h-60'>
                  <img
                    src={room.picture}
                    className='w-full rounded-tl rounded-tr h-60 object-cover'
                    alt={room.title}
                  />
                  <div
                    className={`${styles.roomPictureContainer} group-hover:bg-app-dark group-hover:border-app-dark transition duration-500`}
                  >
                    <img
                      src={room.picture}
                      className='w-20 h-20 object-cover rounded-2xl'
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
            </Link>
          ))}
      </div>
    </div>
  );
}

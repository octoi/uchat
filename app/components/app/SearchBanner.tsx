import { Dispatch, SetStateAction } from 'react';

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchBanner({ searchQuery, setSearchQuery }: Props) {
  return (
    <div className='rounded-md flex justify-center items-center flex-col'>
      <input
        type='text'
        placeholder='Search for title, description, user'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='mt-7 mb-7 w-full lg:w-1/3  p-4 rounded-md outline-none border-none bg-app-dark text-lg'
      />
    </div>
  );
}

import JoinedRooms from '@/components/app/JoinedRooms';
import Layout from '@/components/core/Layout';

export default function AppPage() {
  return (
    <Layout needMargin>
      <div className='px-10 py-6'>
        <h1 className='text-2xl text-app-white font-semibold'>Joined Rooms</h1>
        <JoinedRooms />
      </div>
    </Layout>
  );
}

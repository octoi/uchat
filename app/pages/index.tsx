import ExploreRooms from '@/components/app/ExploreRooms';
import Layout from '@/components/core/Layout';

export default function AppPage() {
  return (
    <Layout needMargin>
      <div className='px-10 py-6'>
        <h1 className='text-2xl text-app-white font-semibold'>Explore Rooms</h1>
        <ExploreRooms />
      </div>
    </Layout>
  );
}

import React from 'react';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title : 'Uchat'}</title>
        <meta
          name='description'
          content={description ? description : 'Chut upp :)'}
        />
      </Head>
      <main className='bg-gray-900 bg-opacity-95 text-gray-200  h-screen'>
        {children}
      </main>
    </div>
  );
}

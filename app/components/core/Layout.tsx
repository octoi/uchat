import React from 'react';
import Head from 'next/head';
import AuthChecker from './AuthChecker';
import Header from '../shared/Header';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  hideDefaultHeader?: boolean;
}

export default function Layout({ children, title, description, hideDefaultHeader }: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title : 'Uchat'}</title>
        <meta
          name='description'
          content={description ? description : 'Chut upp :)'}
        />
      </Head>
      {!hideDefaultHeader && <Header />}
      <AuthChecker>{children}</AuthChecker>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import AuthChecker from './AuthChecker';
import Header from '../shared/header/Header';

interface Props {
  children: React.ReactNode;
  title?: string;
  image?: string;
  description?: string;
  hideDefaultHeader?: boolean;
  needMargin?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  hideDefaultHeader,
  needMargin,
  image,
}: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title : 'Uchat'}</title>
        <link rel='icon' href={image ? image : '/favicon.svg'} />
        <meta
          name='description'
          content={description ? description : 'Chut upp :)'}
        />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='website' />
      </Head>
      {!hideDefaultHeader && <Header />}
      {needMargin && <div className='w-full h-24'></div>}
      <AuthChecker>{children}</AuthChecker>
    </div>
  );
}

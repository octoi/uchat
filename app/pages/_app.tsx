import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ApolloWrapper from '@/components/ApolloWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <Component {...pageProps} />;
    </ApolloWrapper>
  );
}
export default MyApp;

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ApolloWrapper from '@/components/core/ApolloWrapper';
import ChakraWrapper from '@/components/core/ChakraWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <ChakraWrapper>
        <Component {...pageProps} />
      </ChakraWrapper>
    </ApolloWrapper>
  );
}
export default MyApp;

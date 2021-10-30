import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ApolloWrapper from '@/components/core/ApolloWrapper';
import AuthChecker from '@/components/core/AuthChecker';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <AuthChecker>
        <Component {...pageProps} />;
      </AuthChecker>
    </ApolloWrapper>
  );
}
export default MyApp;

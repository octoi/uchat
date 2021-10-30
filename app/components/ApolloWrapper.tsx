import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from 'utils/constants';

interface Props {
  children: React.ReactNode;
}

export default function ApolloWrapper({ children }: Props) {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT || GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from '@/utils/constants';
import { ChildrenProps } from '@/types/default.types';

export default function ApolloWrapper({ children }: ChildrenProps) {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT || GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

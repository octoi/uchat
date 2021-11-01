import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_ENDPOINT } from '@/utils/constants';
import { ChildrenProps } from '@/types/default.types';
import { getToken } from '@/utils/jwt';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

export default function ApolloWrapper({ children }: ChildrenProps) {
  const token = getToken();

  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT || GRAPHQL_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

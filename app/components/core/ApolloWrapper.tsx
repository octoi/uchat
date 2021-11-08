import { ChildrenProps } from '@/types/default.types';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '@/utils/apollo';

export default function ApolloWrapper({ children }: ChildrenProps) {
  const client = getApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

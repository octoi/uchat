import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({}),
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({}),
});

export const schema = new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
});

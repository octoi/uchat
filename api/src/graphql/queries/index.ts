import { GraphQLBoolean, GraphQLObjectType } from 'graphql';

export const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    sample: {
      type: GraphQLBoolean,
      resolve() {
        return true;
      },
    },
  }),
});

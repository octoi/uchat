import { GraphQLObjectType } from 'graphql';
import { LOGIN } from './User';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    loginUser: LOGIN,
  }),
});

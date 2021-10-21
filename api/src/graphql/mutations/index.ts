import { GraphQLObjectType } from 'graphql';
import { LOGIN, REGISTER } from './User';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    loginUser: LOGIN,
    registerUser: REGISTER,
  }),
});

import { GraphQLObjectType } from 'graphql';
import { CREATE_ROOM } from './room.mutation';
import { LOGIN, REGISTER } from './user.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    loginUser: LOGIN,
    registerUser: REGISTER,

    createRoom: CREATE_ROOM,
  }),
});

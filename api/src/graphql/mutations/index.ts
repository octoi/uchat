import { GraphQLObjectType } from 'graphql';
import { CREATE_ROOM } from './room.mutation';
import { LOGIN, REGISTER, UPDATE } from './user.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    loginUser: LOGIN,
    registerUser: REGISTER,
    updateUser: UPDATE,

    createRoom: CREATE_ROOM,
  }),
});

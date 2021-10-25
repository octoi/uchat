import { GraphQLObjectType } from 'graphql';
import { CREATE_ROOM, DELETE_ROOM, JOIN_ROOM } from './room.mutation';
import { LOGIN, REGISTER, UPDATE } from './user.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    loginUser: LOGIN,
    registerUser: REGISTER,
    updateUser: UPDATE,

    createRoom: CREATE_ROOM,
    deleteRoom: DELETE_ROOM,
    joinRoom: JOIN_ROOM,
  }),
});

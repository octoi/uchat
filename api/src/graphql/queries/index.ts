import { GraphQLBoolean, GraphQLObjectType } from 'graphql';
import { GET_ROOMS } from './room.query';
import { GET_USER } from './user.query';

export const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    getUser: GET_USER,
    getRooms: GET_ROOMS,
  }),
});

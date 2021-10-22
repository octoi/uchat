import { GraphQLObjectType } from 'graphql';
import { GET_ROOMS } from './room.query';

export const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    getRooms: GET_ROOMS,
  }),
});

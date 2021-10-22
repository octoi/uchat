import { GraphQLList } from 'graphql';
import { getRoomsController } from '../../controllers/room.controller';
import { RoomType } from '../typeDefs/room.typeDef';

export const GET_ROOMS = {
  type: new GraphQLList(RoomType),
  async resolve() {
    return await getRoomsController();
  },
};

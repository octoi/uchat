import { GraphQLList, GraphQLString } from 'graphql';
import { RoomType } from '../typeDefs/room.typeDef';
import { validateRoomId } from '../validators/room.validator';
import {
  getRoomController,
  getRoomsController,
} from '../../controllers/room.controller';

export const GET_ROOMS = {
  type: new GraphQLList(RoomType),
  async resolve() {
    return await getRoomsController();
  },
};

export const GET_ROOM = {
  type: RoomType,
  args: {
    roomId: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const roomId = validateRoomId(requestArgs);
    return await getRoomController(roomId);
  },
};

import { GraphQLList, GraphQLString } from 'graphql';
import { RoomDataType, RoomType } from '../typeDefs/room.typeDef';
import {
  validateRoomId,
  validateSearchQuery,
} from '../validators/room.validator';
import {
  getRoomController,
  getRoomDataController,
  getRoomsController,
  searchRoomController,
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

export const GET_SEARCH_RESULT = {
  type: GraphQLList(RoomType),
  args: {
    query: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const searchQuery = validateSearchQuery(requestArgs);
    return await searchRoomController(searchQuery);
  },
};

// dev
export const GET_ROOM_DATA = {
  type: RoomDataType,
  args: {
    roomId: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const roomId = validateRoomId(requestArgs);
    return await getRoomDataController(roomId);
  },
};

import { ExpressContext } from 'apollo-server-express';
import { GraphQLBoolean, GraphQLString } from 'graphql';
import { getUserFromContext } from '../../utils/jwt';
import { createRoomArgs } from '../../utils/types';
import { RoomType } from '../typeDefs/room.typeDef';
import {
  createRoomController,
  deleteRoomController,
  joinRoomController,
  leaveRoomController,
} from '../../controllers/room.controller';
import {
  validateCreateRoomArgs,
  validateRoomId,
} from '../validators/room.validator';

export const CREATE_ROOM = {
  type: RoomType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    isPrivate: { type: GraphQLBoolean },
  },
  async resolve(parent: any, requestArgs: any, context: ExpressContext) {
    const args: createRoomArgs = validateCreateRoomArgs(requestArgs);
    const loggedInUser: any = getUserFromContext(context);
    return await createRoomController(args, loggedInUser?.id);
  },
};

export const DELETE_ROOM = {
  type: GraphQLString,
  args: {
    roomId: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: ExpressContext) {
    const roomId: string = validateRoomId(args);
    const loggedInUser: any = getUserFromContext(context);
    return await deleteRoomController(roomId, loggedInUser?.id);
  },
};

export const JOIN_ROOM = {
  type: RoomType,
  args: {
    roomId: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: ExpressContext) {
    const roomId: string = validateRoomId(args);
    const loggedInUser: any = getUserFromContext(context);
    return await joinRoomController(roomId, loggedInUser?.id);
  },
};

export const LEAVE_ROOM = {
  type: GraphQLString,
  args: {
    roomId: { type: GraphQLString },
  },
  async resolve(parent: any, args: any, context: ExpressContext) {
    const roomId: string = validateRoomId(args);
    const loggedInUser: any = getUserFromContext(context);
    return await leaveRoomController(roomId, loggedInUser?.id);
  },
};

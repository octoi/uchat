import { ExpressContext } from 'apollo-server-express';
import { GraphQLList, GraphQLString } from 'graphql';
import { getUserFromContext } from '../../utils/jwt';
import { RoomType, RoomUserType } from '../typeDefs/room.typeDef';
import { validateGetUserArgs } from '../validators/user.validator';
import {
  getJoinedRoomsController,
  getUserController,
} from '../../controllers/user.controller';

export const GET_USER = {
  type: RoomUserType,
  args: {
    email: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const targetUserEmail = validateGetUserArgs(requestArgs);
    return await getUserController(targetUserEmail);
  },
};

export const GET_JOINED_ROOMS = {
  type: GraphQLList(RoomType),
  async resolve(parent: any, requestArgs: any, context: ExpressContext) {
    const loggedInUser: any = getUserFromContext(context);
    return await getJoinedRoomsController(loggedInUser?.id);
  },
};

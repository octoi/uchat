import { ExpressContext } from 'apollo-server-express';
import { GraphQLBoolean, GraphQLString } from 'graphql';
import { createRoomController } from '../../controllers/room.controller';
import { getUserFromContext } from '../../utils/jwt';
import { createRoomArgs } from '../../utils/types';
import { RoomType } from '../typeDefs/room.typeDef';
import { validateCreateRoomArgs } from '../validators/room.validator';

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
    return createRoomController(args, loggedInUser?.id);
  },
};

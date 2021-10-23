import { GraphQLString } from 'graphql';
import { getUserController } from '../../controllers/user.controller';
import { RoomUserType } from '../typeDefs/room.typeDef';
import { validateGetUserArgs } from '../validators/user.validator';

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

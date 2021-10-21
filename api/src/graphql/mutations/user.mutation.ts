import { GraphQLString } from 'graphql';
import { loginArgs, registerArgs } from '../../utils/types';
import { UserType } from '../typeDefs/user.typeDef';
import {
  loginController,
  registerController,
} from '../../controllers/user.controller';
import {
  validateLoginArgs,
  validateRegisterArgs,
} from '../validators/user.validator';

export const LOGIN = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const args: loginArgs = validateLoginArgs(requestArgs);
    return loginController(args);
  },
};

export const REGISTER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const args: registerArgs = validateRegisterArgs(requestArgs);
    return registerController(args);
  },
};

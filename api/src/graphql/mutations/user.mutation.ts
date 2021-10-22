import { GraphQLBoolean, GraphQLString } from 'graphql';
import { loginArgs, registerArgs, updateArgs } from '../../utils/types';
import { UserType } from '../typeDefs/user.typeDef';
import {
  loginController,
  registerController,
  updateController,
} from '../../controllers/user.controller';
import {
  validateLoginArgs,
  validateRegisterArgs,
} from '../validators/user.validator';
import { ExpressContext } from 'apollo-server-express';
import { getUserFromContext } from '../../utils/jwt';

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

export const UPDATE = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
    password: { type: GraphQLString },
    isNewPassword: { type: GraphQLBoolean },
  },
  async resolve(parent: any, requestArgs: any, context: ExpressContext) {
    const loggedInUser: any = getUserFromContext(context);
    const user: updateArgs = {
      ...loggedInUser,
      ...requestArgs,
      password: requestArgs.isNewPassword
        ? requestArgs.password
        : loggedInUser.password,
      ogEmail: loggedInUser.email,
    };
    return updateController(user);
  },
};

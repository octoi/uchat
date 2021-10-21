import { GraphQLString } from 'graphql';
import { registerUser } from '../../controllers/user.controller';
import { loginArgs, registerArgs } from '../../utils/types';
import { UserType } from '../typeDefs/User';

export const LOGIN = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, requestArgs: any) {
    const args: loginArgs = requestArgs;

    console.log(args.email);
    console.log(args.password);
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
    const args: registerArgs = requestArgs;
    registerUser(args);
  },
};

import { GraphQLString } from 'graphql';
import { UserType } from '../typeDefs/User';
import { loginArgs } from '../types/User';

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

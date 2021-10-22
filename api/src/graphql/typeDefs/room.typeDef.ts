import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { UserType } from './user.typeDef';

export const RoomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
    id: { type: GraphQLID },
    roomId: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    isPrivate: { type: GraphQLBoolean },
    creator: { type: UserType },
  }),
});

export const RoomUserType = new GraphQLObjectType({
  name: 'RoomUser',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
  }),
});

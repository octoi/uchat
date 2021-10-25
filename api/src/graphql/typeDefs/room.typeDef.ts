import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
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

// dev
export const RoomDataType = new GraphQLObjectType({
  name: 'RoomDataTypes',
  fields: () => ({
    id: { type: GraphQLID },
    roomId: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    isPrivate: { type: GraphQLBoolean },
    creator: { type: UserType },
    joinedUsers: { type: GraphQLList(UserType) },
  }),
});

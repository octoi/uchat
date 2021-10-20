import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

/*
  User data model
  ---
  id - unique id
  token - string
  name - string
  email - string
  profile - string
  room - string
*/

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    token: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profile: { type: GraphQLString },
  }),
});

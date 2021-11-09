import { gql } from '@apollo/client';

export const GET_JOINED_ROOMS = gql`
  query {
    getJoinedRooms {
      id
      roomId
      title
      description
      picture
      isPrivate
      creator {
        id
        email
        name
        profile
      }
    }
  }
`;

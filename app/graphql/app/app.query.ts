import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query {
    getRooms {
      title
      description
      picture
      isPrivate
      roomId
      creator {
        name
        profile
      }
      joinedUsers {
        name
        profile
      }
    }
  }
`;

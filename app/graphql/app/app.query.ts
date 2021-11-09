import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query {
    getRooms {
      title
      description
      picture
      roomId
      _count {
        joinedUsers
      }
    }
  }
`;

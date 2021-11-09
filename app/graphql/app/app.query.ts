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

export const SEARCH_ROOM = gql`
  query ($query: String) {
    searchRoom(query: $query) {
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

import { gql } from '@apollo/client';

export const GET_ROOM_DATA = gql`
  query ($roomId: String) {
    getRoom(roomId: $roomId) {
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
      _count {
        joinedUsers
      }
    }
  }
`;

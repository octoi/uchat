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
        email
        profile
      }
      joinedUsers {
        name
        email
        profile
      }
      _count {
        joinedUsers
      }
    }
  }
`;

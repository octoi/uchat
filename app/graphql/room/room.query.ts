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
      _count {
        joinedUsers
      }
    }
  }
`;

export const GET_ROOM_USERS = gql`
  query ($roomId: String) {
    getRoomData(roomId: $roomId) {
      joinedUsers {
        name
        email
        profile
      }
    }
  }
`;

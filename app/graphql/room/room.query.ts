import { gql } from '@apollo/client';

export const GET_ROOM_DATA = gql`
  query ($roomId: String) {
    getRoomData(roomId: $roomId) {
      id
      title
      description
      isPrivate
      roomId
      creator {
        email
      }
    }
  }
`;
